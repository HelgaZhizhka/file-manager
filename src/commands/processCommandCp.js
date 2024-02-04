import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'
import path from 'path'

const processCommandCp = async (params) => {
  const [sourcePath, destinationPath] = params
  const sourceFile = path.basename(sourcePath)
  const destinationFilePath = path.join(destinationPath, sourceFile)

  const sourceStream = createReadStream(sourceFile)
  const destinationStream = createWriteStream(destinationFilePath)
  console.log(sourceFile, destinationStream)

  await pipeline(sourceStream, destinationStream)
  console.log(`Copied file from ${sourceFile} to ${destinationFilePath}`)
}

export default processCommandCp
