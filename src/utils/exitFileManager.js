const exitFileManager = (username) => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`)
  process.nextTick(() => process.exit())
}

export default exitFileManager