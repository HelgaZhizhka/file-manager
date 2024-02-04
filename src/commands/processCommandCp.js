import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'
import { basename, join } from 'path'

const processCommandCp = async (params) => {
  const [sourcePath, destinationPath] = params
  const sourceFile = basename(sourcePath)
  const destinationFilePath = join(destinationPath, sourceFile)

  const sourceStream = createReadStream(sourceFile)
  const destinationStream = createWriteStream(destinationFilePath)
  console.log(sourceFile, destinationStream)

  await pipeline(sourceStream, destinationStream)
  console.log(`Copied file from ${sourceFile} to ${destinationFilePath}`)
}

export default processCommandCp
