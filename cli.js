import { createInterface } from 'readline'
import { chdir } from 'process'

import {
  getUsernameFromArgs,
  getHomeDir,
  printCurrentWorkingDirectory,
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
  const commandLine = line.trim().split(' ') 
  processCommand({ command: commandLine[0], payload: commandLine[1] })
})
  .on('SIGINT', () => rl.close())
  .on('close', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`)
    process.nextTick(() => process.exit())
  })
