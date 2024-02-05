import { createInterface } from 'readline'
import { chdir } from 'process'

import {
  getUsernameFromArgs,
  getHomeDir,
  printCurrentWorkingDirectory,
  exitFileManager,
} from './src/utils/index.js'
import processCommand from './src/commands/processCommand.js'

const username = getUsernameFromArgs(process.argv)

chdir(getHomeDir())
console.log(`Welcome to the File Manager, ${username}!`)
printCurrentWorkingDirectory()

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', (line) => {
  const matches = line.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g)
  const command = matches[0]

  let payload = matches
    .slice(1)
    .map((arg) => arg.replace(/^"|"$/g, '').replace(/^'|'$/g, ''))

  if (command === 'exit') {
    exitFileManager(username)
    rl.close()
    return
  }

  processCommand({ command, payload })
})
  .on('SIGINT', () => rl.close())
  .on('close', () => {
    exitFileManager(username)
  })
