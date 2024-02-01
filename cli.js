import { createInterface } from 'readline'

import { getUsernameFromArgs } from './src/utils/index.js'
import { processCommand } from './src/commands/index.js'

const username = getUsernameFromArgs(process.argv)

console.log(`Welcome to the File Manager, ${username}!`)

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})



rl.on('line', (line) => {
  processCommand(line)
})
  .on('SIGINT', () => rl.close())
  .on('close', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`)
    process.nextTick(() => process.exit())
  })
