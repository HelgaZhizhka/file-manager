import { createReadStream, createWriteStream } from 'fs'
import { unlink } from 'fs/promises'
import { pipeline } from 'stream/promises'
import { basename, join } from 'path'

const processCommandMv = async (params) => {
  const [sourcePath, destinationPath] = params
  const sourceFile = basename(sourcePath)
  const destinationFilePath = join(destinationPath, sourceFile)

  const sourceStream = createReadStream(sourcePath)
  const destinationStream = createWriteStream(destinationFilePath)

  await pipeline(sourceStream, destinationStream)

  await unlink(sourceFile)
  console.log(`Moved file from ${sourcePath} to ${destinationFilePath}`)
}

export default processCommandMv
