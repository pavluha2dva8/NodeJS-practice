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
/*// Маршрутизація (видача сторінки відносно URL)

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

const http = require('http')
const fs = require('fs')
const bodyParser = require('body-parser')
const express = require('express')
const app =express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  fs.createReadStream(__dirname + '/index.html').pipe(res)
})

server.listen(3000, '127.0.0.1')


app.post(__dirname + '/index.html', urlencodedParser, (req, res){
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render(__dirname + '/index.html')
})
*/
// =========================================================
/*
// #13 Express

let express = require('express') // модуль експрес повертає ф-ю
// яку ми повинні визвати
let app = express() // таким чином в змінній app ми отримаємо всі ф-ї,
// які доступні в express
// ми можемо підключитись до сервера, обробляти ссилки ітд.

// Тут ми так само настроюємо сервер. Ми повинні встановити
// порт, за яким будемо слідкувати

app.listen(3000)

// Тепер ми повинні відслідковувати ссилки і тут є http запроси
// типу get, post, delete, put

// Зараз ми розглянемо тільки get і post
// Get - поміщається в URL адрес: pavluha2dva8/news/12
// Post - ми передаємо данні на сервер типу коли відправляємо форму
// вони не показуются в URL

// Bідслідковуємо головну сторінку. Якщо юзер зайшов на неї, викликаємо ф-ю
app.get('/', (req, res) => {
    res.send('This is home page')
})

app.get('/news', (req, res) => {
    res.send('This is news page')
})
// На данний момент ми слідкуємо за статичними сторінками
// Але якщо нам потрібно слідкувати наприклад за news/228 (id сторінки)?
// Потрібно вказати /news/:і абсолютно любу назву, але краще щось осмислене
app.get('/news/:id', (req, res) => {
    res.send('id is -' + req.params.id) // тут ми показуємо наш ід на якому знаходимось
})
app.get('/news/:name/:id', (req, res) => {
    res.send('name is - ' + req.params.name+ ' id is - ' + req.params.id)
})
*/
// =========================================================
// #14 Шаблонізотор

let express = require('express')

let app = express()
// 1-й парам - що ми вказуємо(движок шаблонізатора)
// 2-й парам - який саме (ejs)
app.set('view engine', 'ejs')
// всі шаблони які ми вказуємо, по дефолту шукаються в папці views

// Першим ми вказали ссилку, по якій знаходяться всі статичні файли
// в нашому випадку /public/css/style.css
// все, що починається з ссилки /public, там знаходяться статичні файли
// Друге, ми вказуємо, де ми можемо шукати ці статичні файли в НАШОМУ ПРОЕКТІ
// express.static('public')
// Тобто ще раз!!! express.static('public') відповідає, яка папка веде
// до статичних файлів. А '/public' вказує, яка ссилка веде до цих статичних файлів
// замість '/public' ми могли вказати '/assets', але тоді в файлах .ejs
// повинно було виглядати так /assets/css/style.css
// Щоб не плутатись, бажано, що ссилку, що папку називати однаково!!!
// public - общепринята назва типу по дефолту, але можна називати по різному
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/news/:id', (req, res) => {
    // також ми можемо передавати свої обєкти
    // просто спочатку вказуємо назву, під якою будемо предавати,
    // а далі значання типу  obj: obj
    let obj = { title: 'News', id: 228, paragraphs: ['Параграф', 'Звичайний текст', 'Числа 2, 4, 6', 99] }

    // Нагадую, що метод .render шукає файли в папці views
    // тому вказувати шлях і розширення не потрібно

    // В шаблон 'news' ми передаємо обєкт з параметрама
    // в данному випадку ід
    res.render('news', {newsId: req.params.id, obj: obj})
})

app.listen(3000)