const {Command, flags} = require('@oclif/command');
const {cli} = require('cli-ux');
const api = require('../api');
const session = require('../session');

class NoteCommand extends Command {
  static args = [
    {name: 'note'},
  ]
  async run() {
    if (!session.isLoggedIn()) {
      console.log('Not logged in, try `tap login`');
      return;
    }

    const {args} = this.parse(NoteCommand)

    let raw;
    if (args.note) {
      raw = args.note;
    } else {
      raw = await cli.prompt('Note');
    }

    const {err, res} = await api.addNote(raw);

    if (err) {
      console.log(err);
    } else {
      console.log('Note saved');
    }
  }
}


NoteCommand.description = `Make a new note`

module.exports = NoteCommand
