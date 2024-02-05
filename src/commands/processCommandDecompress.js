import processCompression from './processCompression.js'

const processCommandDecompress = async (params) => {
  const [sourcePath, destinationPath] = params

  await processCompression(sourcePath, destinationPath, false)
}

export default processCommandDecompress
