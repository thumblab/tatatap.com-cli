const {Command, flags} = require('@oclif/command');
const {cli} = require('cli-ux');
const api = require('../api');
const session = require('../session');
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']




class ReadCommand extends Command {
  static flags = {
    all: flags.boolean({char: 'a'}),
    folder: flags.string({char: 'f'})
  }

  async run() {

    if (!session.isLoggedIn()) {
      console.log('Not logged in, try `tap login`');
      return;
    }

    const {flags} = this.parse(ReadCommand);
    let path;

    if (flags.all) {
      path = '/';
    } else if (flags.folder) {
      path = flags.folder;
    } else {
      path = await cli.prompt('Folder?', {default: '/'});
    }

    const {err, res} = await api.getNotes(path);

    if (err) {
      console.log(err);
    } else {
      // print notes
      let output;
      if (res && res.length === 0) {
        output = `
No notes in folder ${path}


        `;

      } else {
        output = `
Notes in folder ${path}


        `;

        let curDate = '';

        res.forEach(n => {
          const d = new Date(n.date)
          const dateStr = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
          if (curDate !== dateStr) {
            output+= `
%%%%%%%%%%%%
${dateStr}
%%%%%%%%%%%%
            `
            curDate = dateStr;
          }

          output+= `
------------------
${n.raw}

          `
        })
      }

      console.log(output);
    }
  }
}


ReadCommand.description = `View your notes`

module.exports = ReadCommand
