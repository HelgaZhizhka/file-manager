import { cwd } from 'process'
import { resolve } from 'path'

const getFilePath = (filename) => resolve(cwd(), filename)

export default getFilePath
