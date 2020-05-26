const fs = require('fs');
const path = require('path');
const HOME_DIR = require('os').homedir();
const p = '.tttap.json'

let session;

try {
  if (fs.existsSync(HOME_DIR, p)) {
    //file exists
    session = require(path.resolve(HOME_DIR, p))
  }
} catch(err) {
  // console.error(err)
}

module.exports.save = function (cookie) {
  const session = {cookie};
  fs.writeFileSync(path.resolve(HOME_DIR, p), JSON.stringify(session));
  return session;
}

module.exports.isLoggedIn = function () {
  const session = exports.get();

  if (!session || !session.cookie) {
    return false;
  }
  const item = session.cookie
                      .split(';')
                      .filter(_ => !!_)
                      .map(s => s.trim().toLowerCase())
                      .find(s => s.startsWith('expires='));
  if (!item) {
    return false
  }

  const expires = new Date(item.substr(8))

  return Date.now() < expires;
}

module.exports.get = function () {
  return session;
}
