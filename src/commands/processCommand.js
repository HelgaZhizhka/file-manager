import { INVALID_INPUT } from '../constants.js'
import wrapperProcessCommand from './wrapperProcessCommand.js'
import {
  processCommandAdd,
  processCommandRn,
  processCommandCp,
  processCommandMv,
  processCommandRm,
  processCommandCat,
  processCommandUp,
  processCommandCd,
  processCommandLs,
  processCommandHash,
  processCommandCompress,
  processCommandDecompress,
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
      await wrapperProcessCommand(processCommandCat, payload)
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
      await wrapperProcessCommand(processCommandMv, payload)
      break
    case 'rm':
      await wrapperProcessCommand(processCommandRm, payload)
      break
    case 'hash':
      await wrapperProcessCommand(processCommandHash, payload)
      break
    case 'compress':
      await wrapperProcessCommand(processCommandCompress, payload)
      break
    case 'decompress':
      await wrapperProcessCommand(processCommandDecompress, payload)
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
