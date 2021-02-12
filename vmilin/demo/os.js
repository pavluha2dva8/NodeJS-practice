const os = require('os')

console.log('Операційна система:', os.platform())

console.log('Архітектура процeсора:', os.arch())

console.log('Інфа. по процeсорам:', os.cpus())

console.log('Вільна пам\'ять:', os.freemem())

console.log('Всього пам\'яті:', os.totalmem())

console.log('Домашня директорія:', os.homedir())

console.log('Час скільки вкл. комп:', os.uptime())