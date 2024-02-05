import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'
import zlib from 'zlib'
import { cwd } from 'process'
import { parse, resolve } from 'path'

import { getFilePath } from '../utils/index.js'

const processCompression = async (sourcePath, destinationPath, isCompress) => {
  const sourceFilePath = getFilePath(sourcePath)
  const destinationFilePath = getFilePath(destinationPath)
  const sourceFileBase = parse(sourceFilePath).base
  const sourceFileName = parse(sourceFilePath).name

  let destFileName = isCompress ? `${sourceFileBase}.br` : sourceFileName

  const destFilePath = resolve(cwd(), destinationFilePath, destFileName)

  const sourceStream = createReadStream(sourceFilePath)
  const destinationStream = createWriteStream(destFilePath)

  const brotliStream = isCompress
    ? zlib.createBrotliCompress()
    : zlib.createBrotliDecompress()

  await pipeline(sourceStream, brotliStream, destinationStream)

  console.log(
    `${
      isCompress ? 'Compressed' : 'Decompressed'
    } file from ${sourceFilePath} to ${destFilePath}`
  )
}

export default processCompression
