import { ERROR_MESSAGES } from '../utils/constants.js'
import { printCurrentWorkingDirectory } from '../utils/index.js'


const wrapperProcessCommand = (commandFunction, payload = {}) => {
  try {
    commandFunction(payload)
    printCurrentWorkingDirectory()
  } catch {
    console.error(ERROR_MESSAGES)
  }
}

export default wrapperProcessCommand
