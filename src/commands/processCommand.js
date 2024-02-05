import { INVALID_INPUT, COMMAND_NO_PARAMETERS, COMMANDS } from '../constants.js'
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
  processCommandOsEol,
  processCommandOsCpus,
  processCommandOsHomeDir,
  processCommandOsUsername,
  processCommandOsArchitecture,
} from './index.js'

const {
  UP,
  CD,
  LS,
  CAT,
  ADD,
  RN,
  RM,
  CP,
  MV,
  HASH,
  COMPRESS,
  DECOMPRESS,
  OS,
  EOL,
  CPUS,
  HOMEDIR,
  USERNAME,
  ARCHITECTURE,
} = COMMANDS

const processCommand = async (data) => {
  const { command, payload } = data

  switch (command) {
    case UP:
      if (payload.length > 0) {
        console.log(COMMAND_NO_PARAMETERS)
        break
      }
      wrapperProcessCommand(processCommandUp, payload)
      break
    case CD:
      wrapperProcessCommand(processCommandCd, payload)
      break
    case LS:
      if (payload.length > 0) {
        console.log(COMMAND_NO_PARAMETERS)
        break
      }
      await wrapperProcessCommand(processCommandLs, payload)
      break
    case CAT:
      await wrapperProcessCommand(processCommandCat, payload)
      break
    case ADD:
      await wrapperProcessCommand(processCommandAdd, payload)
      break
    case RN:
      await wrapperProcessCommand(processCommandRn, payload)
      break
    case CP:
      await wrapperProcessCommand(processCommandCp, payload)
      break
    case MV:
      await wrapperProcessCommand(processCommandMv, payload)
      break
    case RM:
      await wrapperProcessCommand(processCommandRm, payload)
      break
    case HASH:
      await wrapperProcessCommand(processCommandHash, payload)
      break
    case COMPRESS:
      await wrapperProcessCommand(processCommandCompress, payload)
      break
    case DECOMPRESS:
      await wrapperProcessCommand(processCommandDecompress, payload)
      break
    case OS:
      if (payload.length === 0) {
        console.log(INVALID_INPUT)
        break
      }
      switch (payload[0].toLowerCase()) {
        case EOL:
          wrapperProcessCommand(processCommandOsEol)
          break
        case CPUS:
          wrapperProcessCommand(processCommandOsCpus)
          break
        case HOMEDIR:
          wrapperProcessCommand(processCommandOsHomeDir)
          break
        case USERNAME:
          wrapperProcessCommand(processCommandOsUsername)
          break
        case ARCHITECTURE:
          wrapperProcessCommand(processCommandOsArchitecture)
          break
        default:
          break
      }
      break
    default:
      console.log(INVALID_INPUT)
  }
}

export default processCommand
