import { cwd } from 'process'
import { parse, sep } from 'path'

const isDirectoryRoot = () => {
  const currentDirectory = cwd()
  const parsedPath = parse(currentDirectory)
  if (parsedPath.root === currentDirectory) {
     console.log('You cannot go up beyond the root directory.')
     return true
  }
}

export default isDirectoryRoot
