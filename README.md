/tap
=====

Command line interface to save and retrieve notes from the [tatatap.com](https://www.tatatap.com) note-taking service.

[See here for an in-depth guide on the /tap system](https://tatatap.com/how-to)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/tttap.svg)](https://npmjs.org/package/tttap)
[![Downloads/week](https://img.shields.io/npm/dw/tttap.svg)](https://npmjs.org/package/tttap)
[![License](https://img.shields.io/npm/l/tttap.svg)](https://github.com/thumblab/tttap/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g tatatap.com-cli
$ ttt COMMAND
running command...
$ ttt (-v|--version|version)
tatatap.com-cli/0.9.3 linux-x64 node-v12.16.3
$ ttt --help [COMMAND]
USAGE
  $ ttt COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ttt help [COMMAND]`](#ttt-help-command)
* [`ttt login`](#ttt-login)
* [`ttt logout`](#ttt-logout)
* [`ttt note [NOTE]`](#ttt-note-note)
* [`ttt read`](#ttt-read)

## `ttt help [COMMAND]`

display help for ttt

```
USAGE
  $ ttt help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src/commands/help.ts)_

## `ttt login`

Log in to your /tap account.

```
USAGE
  $ ttt login
```

_See code: [src/commands/login.js](https://github.com/thumblab/tatatap-cli/blob/v0.9.3/src/commands/login.js)_

## `ttt logout`

Log out of your /tap account.

```
USAGE
  $ ttt logout
```

_See code: [src/commands/logout.js](https://github.com/thumblab/tatatap-cli/blob/v0.9.3/src/commands/logout.js)_

## `ttt note [NOTE]`

Make a new note

```
USAGE
  $ ttt note [NOTE]
```

_See code: [src/commands/note.js](https://github.com/thumblab/tatatap-cli/blob/v0.9.3/src/commands/note.js)_

## `ttt read`

View your notes

```
USAGE
  $ ttt read

OPTIONS
  -a, --all
  -f, --folder=folder
```

_See code: [src/commands/read.js](https://github.com/thumblab/tatatap-cli/blob/v0.9.3/src/commands/read.js)_
<!-- commandsstop -->
