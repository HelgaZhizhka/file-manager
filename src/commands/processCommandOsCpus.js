import os from 'os'

const processCommandOsCpus = () => {
  const cpus = os.cpus()
  console.log(`Amount of CPUs: ${cpus.length}`)
  const info = cpus.map(
    (cpu, index) =>
      `CPU ${index + 1}: Model - ${cpu.model}, Clock Rate - ${(
        cpu.speed / 1000
      ).toFixed(2)} GHz`
  )
  console.table(info)
}

export default processCommandOsCpus
