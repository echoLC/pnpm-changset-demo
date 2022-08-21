export function eeCli() {
  console.log('This is eeCli')
}

export function log(message, type = 'info') {
  console[type](message)
}
