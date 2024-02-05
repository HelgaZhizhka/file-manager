import { createReadStream, createWriteStream } from 'fs'
import { pipeline } from 'stream/promises'
import { basename, join } from 'path'

const processCommandCp = async (params) => {
  const [sourcePath, destinationPath] = params
  const sourceFile = basename(sourcePath)
  const destinationFilePath = join(destinationPath, sourceFile)

  const sourceStream = createReadStream(sourceFile)
  const destinationStream = createWriteStream(destinationFilePath)

  await pipeline(sourceStream, destinationStream)
  console.log(`File copied successfully to: ${destinationFilePath}`)
}

export default processCommandCp
