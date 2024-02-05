import { getFilePath } from '../utils/index.js'
import { createReadStream } from 'fs'
import crypto from 'crypto'

import { HASH } from '../constants.js'

const processCommandHash = async (params) => {
  const [filename] = params
  const filePath = getFilePath(filename)

  const stream = createReadStream(filePath)

  const hash = crypto.createHash(HASH)

  stream.pipe(hash).on('finish', () => {
    console.log(hash.digest('hex'))
  })
  
  stream.on('error', () => {
    console.error('Error reading file!')
  })

}

export default processCommandHash
