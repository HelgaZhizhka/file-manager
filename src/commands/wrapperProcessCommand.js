import { ERROR_MESSAGES } from '../constants.js'
import { printCurrentWorkingDirectory } from '../utils/index.js'

const wrapperProcessCommand = async (commandFunction, payload = {}) => {
  try {
    await commandFunction(payload)
    printCurrentWorkingDirectory()
  } catch {
    console.error(ERROR_MESSAGES)
  }
}

export default wrapperProcessCommand
