"user strict"

let hora = 0
let minuto = 0
let segundo = 0

let tempo = 1000 //Quantos milesimos valem 1 segundo
let cron = undefined

function start() {
    cron = setInterval(timer, tempo)
}

function pause() {
    clearInterval(cron)
}

function stop() {
    clearInterval(cron)
    hora = 0
    minuto = 0
    segundo = 0
    document.getElementById('counter').innerHTML = '00:00:00'
}

function timer() {
    segundo++
    if (segundo == 60) {
        segundo = 0
        minuto++

        if (minuto == 60) {
            minuto == 0
            hora++
        }
    }
    let format = (hora < 10 ? '0' + hora : hora) + ':' + (minuto < 10 ? '0' + minuto : mm) + ':' + (segundo < 10 ? '0' + segundo : segundo)
    document.getElementById('counter').innerHTML = format
}