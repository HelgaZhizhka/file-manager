import { rename } from 'fs/promises'

import { getFilePath } from '../utils/index.js'

const processCommandRn = async (payload) => {
  const [oldPath, newName] = payload
  const oldFilePath = getFilePath(oldPath)
  const newFilePath = getFilePath(newName)
  await rename(oldFilePath, newFilePath)
  console.log(`Renamed file to: ${newName}`)
}

export default processCommandRn
