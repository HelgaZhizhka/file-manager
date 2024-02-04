import crypto from 'crypto'
import { pipeline } from 'stream/promises'

const hash = async (filePath) => {
  const hashAlgorithm = 'sha256'
  const stream = createReadStream(filePath)
  return await pipeline(stream, hashAlgorithm.setEncoding('hex'))

  // const hash = crypto.createHash(algorithm)
  // hash.update(fileData)

  // return hash.digest('hex')
}

export default hash
