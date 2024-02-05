import { cwd } from 'process'

const printCurrentWorkingDirectory = () => {
  console.log(`You are currently in ${cwd()}`)
}

export default printCurrentWorkingDirectory