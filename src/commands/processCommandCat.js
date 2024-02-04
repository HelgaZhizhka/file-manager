import { createReadStream } from 'fs'

import { getFilePath } from '../utils/index.js'

const processCommandCat = async (params) => {
  const [filename] = params
  const filePath = getFilePath(filename)


    const readStream = createReadStream(filePath, { encoding: 'utf8' })

    readStream.on('data', (chunk) => {
      console.log(chunk)
    })

    readStream.on('end', () => {
      console.log(`Finished reading file: ${filePath}`)
    })

    readStream.on('error', () => {
      console.error('Error reading file!')
    })
  
}

export default processCommandCat
