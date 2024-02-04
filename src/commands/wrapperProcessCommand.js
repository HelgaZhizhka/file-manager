import { ERROR_MESSAGES } from '../utils/constants.js'
import { printCurrentWorkingDirectory } from '../utils/index.js'

const wrapperProcessCommand = async (commandFunction, payload = {}) => {
  try {
    await commandFunction(payload)
    printCurrentWorkingDirectory()
  } catch(error) {
    console.error(ERROR_MESSAGES, error.message)
  }
}

export default wrapperProcessCommand
