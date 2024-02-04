import { writeFile } from 'fs/promises'

import { getFilePath } from '../utils/index.js'


const processCommandAdd = async (params) => {
  const [filename] = params
  const filePath = getFilePath(filename)

  await writeFile(filePath, '')
  console.log(`Created empty file: ${filename}`)
}

export default processCommandAdd
