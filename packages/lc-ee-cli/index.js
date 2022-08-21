export function eeCli() {
  console.log('This is eeCli')
}

const types = ['log', 'info', 'warn', 'error']
export function log(message, type = 'log') {
  if (!types.includes(type)) {
    throw new Error('a invalid type')
  }
  console[type](message)
}
