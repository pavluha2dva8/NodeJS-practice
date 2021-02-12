// fili system
const fs = require('fs')
const path = require('path')

// Є правило в нодеЖС. Якщо ми працюємо з Асинхронними операціями, 
// то перший параметр в ф-ї повинен бути якийсь ерор
// ================================================================
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err
//     }

//     console.log('Папка создана')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello NodeJS', err => {
//     if (err) {
//         throw err
//     }

//     console.log('Файл создан')

//     fs.appendFile(filePath, '\nHello NodeJS Again', err => {
//         if (err) {
//             throw err
//         }
    
//         console.log('Файл создан')
//     })
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
        throw err
    }

    console.log(content)
    // const data = Buffer.from(content)
    // console.log('Content:', data.toString())
})