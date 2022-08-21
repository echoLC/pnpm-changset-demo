export function eeCli() {
  console.log('This is eeCli')
}

export function log(message, type = 'log') {
  console[type](message)
}
