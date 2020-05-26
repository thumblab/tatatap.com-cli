const {Command, flags} = require('@oclif/command');
const {cli} = require('cli-ux');

const api = require('../api');


class LogoutCommand extends Command {
  async run() {
    const {err, res, headers} = await api.logout();
    if (err) {
      return console.log(err);
    }

    return console.log('You are now logged out.')
  }
}

LogoutCommand.description = `Log out of your /tap account.`

module.exports = LogoutCommand
