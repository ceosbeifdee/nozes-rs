const anos = document.querySelector("#anos")
const meses = document.querySelector("#meses")
const semanas = document.querySelector("#semanas")
const dias = document.querySelector("#dias")
const horas = document.querySelector("#horas")
const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")

const relogio = setInterval(function time() {
    let encontro = new Date("2024-11-16T23:38:00-03:00")
    let hoje = new Date()
    let tempoPassado = hoje - encontro

    let anosPassados = Math.floor(tempoPassado / (1000 * 60 * 60 * 24 * 365))
    let mesesPassados = Math.floor((tempoPassado % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
    let semanasPassados = Math.floor(tempoPassado / (1000 * 60 * 60 * 24 * 7))
    let diasPassados = Math.floor((tempoPassado % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
    let horasPassados = Math.floor((tempoPassado % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
    let minutosPassados = Math.floor((tempoPassado % (1000 * 60 * 60) / (1000 * 60)))
    let segundosPassados = Math.floor((tempoPassado % (1000 * 60) / 1000))

    if (anosPassados < 10) {
        anos.textContent = `0${anosPassados}`
    } else {
        anos.textContent = anosPassados
    }

    if (mesesPassados < 10) {
        meses.textContent = `0${mesesPassados}`
    } else {
        meses.textContent = mesesPassados
    }

    if (semanasPassados < 10) {
        semanas.textContent = `0${semanasPassados}`
    } else {
        semanas.textContent = semanasPassados
    }

    if (diasPassados < 10) {
        dias.textContent = `0${diasPassados}`
    } else {
        dias.textContent = diasPassados
    }

    if (horasPassados < 10) {
        horas.textContent = `0${horasPassados}`
    } else {
        horas.textContent = horasPassados
    }

    if (minutosPassados < 10) {
        minutos.textContent = `0${minutosPassados}`
    } else {
        minutos.textContent = minutosPassados
    }

    if (segundosPassados < 10) {
        segundos.textContent = `0${segundosPassados}`
    } else {
        segundos.textContent = segundosPassados
    }
})