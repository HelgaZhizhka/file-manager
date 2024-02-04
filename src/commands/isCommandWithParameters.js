import { COMMAND_NO_PARAMETERS } from '../constants.js'

const isCommandWithParameters = (params) => {
  if (params.length > 0) {
    console.log(COMMAND_NO_PARAMETERS)
    return true
  }
}

export default isCommandWithParameters
