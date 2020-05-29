const {Command, flags} = require('@oclif/command');
const {cli} = require('cli-ux');
const api = require('../api');

const emailPattern = /.+@.+\.[A-Za-z]{2,20}/;

class LoginCommand extends Command {
  async run() {
    let username = await cli.prompt('What is your email address?');

    while (!emailPattern.test(username)) {
      username = await cli.prompt('Please enter a valid email address');
    }

    // hide input while typing
    const password = await cli.prompt('What is your password?', {type: 'hide'})

    const {err, res} = await api.login(username, password)

    if (err) {
      return console.log(err);
    }

    return console.log('You are now logged in.')
  }
}


LoginCommand.description = `Log in to your /tap account.`

module.exports = LoginCommand
