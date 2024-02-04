import { chdir } from 'process'

const processCommandCd = (params) => {
  const destPath = params[0]
  chdir(destPath)
}

export default processCommandCd
