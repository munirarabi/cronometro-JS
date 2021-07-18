"user strict"

let hora = 0
let minuto = 0
let segundo = 0

let tempo = 1000 //Quantos milesimos valem 1 segundo
let cron = undefined

function start() {
    cron = setInterval(timer, tempo)
    document.getElementById('counter').style.color = '#4EEE94'
}

function pause() {
    clearInterval(cron)
    document.getElementById('counter').style.color = '#8B8386'
}

function stopp() {
    clearInterval(cron)
    hora = 0
    minuto = 0
    segundo = 0 
    document.getElementById('counter').innerText = '00:00:00';
    document.getElementById('counter').style.color = 'black'
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