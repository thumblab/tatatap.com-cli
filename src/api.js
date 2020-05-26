const axios = require('axios');
const session = require('./session') || {};

exports.addNote = async function (raw) {
  const {cookie} = session.get();

  return handleResponse(
    axios.post(
      'https://api.tatatap.com/messages/go',
      {
        raw,
      },
      {
        headers: {
          cookie: cookie
        }
      }
  ))
}

exports.getNotes = async function (path) {
  const {cookie} = session.get();

  return handleResponse(
    axios.post(
      'https://api.tatatap.com/messages/listAll',
      {
        path,
      },
      {
        headers: {
          cookie: cookie
        }
      }
  ))
}


exports.login = async function (username, password) {
  const {err, res, headers} = await handleResponse(axios.post('https://api.tatatap.com/login', {
    username,
    password
  }));

  if (headers && headers['set-cookie']) {
    session.save(headers['set-cookie'][0])
  }

  return {err, res, headers}
}


exports.logout = async function () {
  const {cookie} = session.get();
  session.save('');
  return handleResponse(axios.post(
    'https://api.tatatap.com/logout',
    {},
    {
      headers: {
        cookie
      }
    }
  ))
}


async function handleResponse (req) {
  let res;
  try {
    res = await req;

    return {res: res.data, headers: res.headers};
  } catch (err) {
    return {err: err.response.data};
  }
}
