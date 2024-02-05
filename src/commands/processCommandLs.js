import { readdir } from 'fs/promises'
import { cwd } from 'process'

const processCommandLs = async (params) => {

  const currentDirectory = cwd()

  const items = await readdir(currentDirectory, { withFileTypes: true })
  const sortedItems = items
    .map((item) => ({
      Name: item.name,
      Type: item.isDirectory() ? 'directory' : 'file',
    }))
    .sort((a, b) => {
      if (a.Type === b.Type) {
        return a.Name.localeCompare(b.Name)
      }
      return a.Type === 'directory' ? -1 : 1
    })

  console.table(sortedItems)
}

export default processCommandLs
