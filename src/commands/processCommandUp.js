import { chdir } from 'process'

import {
  isDirectoryRoot,
} from '../utils/index.js'


const processCommandUp = () => {

  if (isDirectoryRoot()) {
    return
  }

  chdir('..')
}

export default processCommandUp
