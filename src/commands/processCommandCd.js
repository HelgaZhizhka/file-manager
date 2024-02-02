import { chdir } from 'process'

import { isDirectoryRoot } from '../utils/index.js'

const processCommandCd = (destPath) => {
  isDirectoryRoot()
  chdir(destPath)
}

export default processCommandCd
