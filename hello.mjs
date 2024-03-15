
const status = await $`git status --porcelain`

console.log(`stdoub: ${status.stdout}`)
console.log(`stderr: ${status.stderr}`)
console.log(`exitCode: ${status.exitCode}`)
console.log(`length: ${status.lentgth}`)
console.log(`status: ${status}`)
console.log(status)

