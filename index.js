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
// Маршрутизація (видача сторінки відносно URL)

let fs = require('fs')
// Підключення до локального сервера
let http = require('http')

let server = http.createServer((req, res) => {
    console.log('Page URL: ' + req.url)
    if (req.url === '/index' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        fs.createReadStream(__dirname + '/about.html').pipe(res)
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        fs.createReadStream(__dirname + '/404.html').pipe(res)
    }
})

server.listen(3000, '127.0.0.1')
console.log('Ми слідкуємо за портом 3000')