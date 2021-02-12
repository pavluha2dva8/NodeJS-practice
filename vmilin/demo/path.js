const path = require('path')

console.log('Ім\'я файла:', path.basename(__filename))

console.log('Ім\'я директорії:', path.dirname(__filename))

console.log('Розширення файла:', path.extname(__filename))

console.log('Parse:', path.parse(__filename))
console.log('Parse:', path.parse(__filename).name)
console.log('Parse:', path.parse(__filename).base)

console.log(path.join(__dirname, 'server', 'index.html'))