/*
// #8 Створення сервера NodeJS
let http = require('http')

let server = http.createServer((req, res) => {
    console.log('Page URL: ' + req.url)
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World!!!')
})

server.listen(3000, '127.0.0.1')
console.log('Local server started')
*/
// =========================================================
// #9 Робота з потоками
/*
let fs = require('fs')

let myReadShort = fs.createReadStream('./article.txt')
let myWriteShort = fs.createWriteStream('./news.txt')

myReadShort.on('data', (chunk) => {
    console.log('New data:')
    myWriteShort.write(chunk)
})
*/
// =========================================================
/*
// #10 Ф-я pipe() робота з HTML i JSON
let fs = require('fs')

let myReadShort = fs.createReadStream('./article.txt')
let myWriteShort = fs.createWriteStream('./news2.txt')
myReadShort.pipe(myWriteShort)

// myReadShort.on('data', (chunk) => {
//     console.log('New data:')
//     myWriteShort.write(chunk)
// })

let http = require('http')

let server = http.createServer((req, res) => {
    console.log('Page URL: ' + req.url)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    let obj = {
        model: 'BNW',
        speed: '234.5',
        wheels: 4
    }
    res.end(JSON.stringify(obj))
})

server.listen(3000, '127.0.0.1')
console.log('Local server started')
*/
// =========================================================