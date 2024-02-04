import { chdir } from 'process'

import isCommandWithParameters from './isCommandWithParameters.js'
import { isDirectoryRoot } from '../utils/index.js'

const processCommandUp = (params) => {
  if (isCommandWithParameters(params)) {
    return
  }

  if (isDirectoryRoot()) {
    return
  }

  chdir('..')
}

export default processCommandUp
