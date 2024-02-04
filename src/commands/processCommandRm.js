import { unlink } from 'fs/promises'
import { getFilePath } from '../utils/index.js'

const processCommandRm = async (params) => {
  const [filename] = params
  const filePath = getFilePath(filename)

  await unlink(filePath)
  console.log(`Deleted file: ${filePath}`)
}

export default processCommandRm
