import processCompression from './processCompression.js'

const processCommandCompress = async (params) => {
  const [sourcePath, destinationPath] = params

  await processCompression(sourcePath, destinationPath, true)
}

export default processCommandCompress
