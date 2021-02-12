/*
let things = require('./things')
let {someValue} = require('./things')

console.log(someValue)
console.log(things.multiply(5, 10))
console.log(things.arrayCounter([2, 1, 3, 4, 5]))
*/
// =========================================================
/*
let events = require('events')

let myEmit = new events.EventEmitter()

myEmit.on('some_event', function(text) {
    console.log(text)
})

myEmit.emit('some_event', 'event start')
*/
// =========================================================
let events = require('events')
let util = require('util')

class Cars {
    constructor(model) {
        this.model = model
    }
}

util.inherits(Cars, events.EventEmitter)

let bmw = new Cars('БНВ')
let audi = new Cars('Audi')
let volvo = new Cars('Volvo')

let cars =[bmw, audi, volvo]

cars.forEach( (car) => {
    car.on('speed', (text) => {
        console.log(`${car.model} speed is - ${text}`)
    })
})

bmw.emit('speed', '184.5 km/h')
audi.emit('speed', '284.5 km/h')
volvo.emit('speed', '84.5 km/h')