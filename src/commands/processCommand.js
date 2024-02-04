import { INVALID_INPUT } from '../utils/constants.js'
import wrapperProcessCommand from './wrapperProcessCommand.js'
import {
  processCommandAdd,
  processCommandRn,
  processCommandCp,
  processCommandUp,
  processCommandCd,
  processCommandLs,
} from './index.js'

const processCommand = async (data) => {
  const { command, payload } = data
  switch (command) {
    case 'up':
      wrapperProcessCommand(processCommandUp, payload)
      break
    case 'cd':
      wrapperProcessCommand(processCommandCd, payload)
      break
    case 'ls':
      await wrapperProcessCommand(processCommandLs, payload)
      break
    case 'cat':
      console.log('Read file and print content in console')
      break
    case 'add':
      await wrapperProcessCommand(processCommandAdd, payload)
      break
    case 'rn':
      await wrapperProcessCommand(processCommandRn, payload)
      break
    case 'cp':
      await wrapperProcessCommand(processCommandCp, payload)
      break
    case 'mv':
      console.log('Move file ')
      break
    case 'rm':
      console.log('Delete file ')
      break
    case 'hash':
      console.log('Calculate hash')
      break
    case 'compress':
      console.log('compress')
      break
    case 'decompress':
      console.log('decompress')
      break
    case '.exit':
      console.log('Thank you for using File Manager. Goodbye!')
      process.nextTick(() => process.exit())
      break
    default:
      console.log(INVALID_INPUT)
  }
}

export default processCommand
