import { chdir } from 'process'

import { isDirectoryRoot } from '../utils/index.js'

const processCommandUp = (params) => {
  if (isDirectoryRoot()) {
    return
  }

  chdir('..')
}

export default processCommandUp
