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
    let semanasPassados = Math.floor((tempoPassado % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24 * 7))
    let diasPassados = Math.floor((tempoPassado % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
    let horasPassados = Math.floor((tempoPassado % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
    let minutosPassados = Math.floor((tempoPassado % (1000 * 60 * 60) / (1000 * 60)))
    let segundosPassados = Math.floor((tempoPassado % (1000 * 60) / 1000))

    anos.textContent = anosPassados < 10 ? `0${anosPassados}` : anosPassados
    meses.textContent = mesesPassados < 10 ? `0${mesesPassados}` : mesesPassados
    semanas.textContent = semanasPassados < 10 ? `0${semanasPassados}` : semanasPassados
    dias.textContent = diasPassados < 10 ? `0${diasPassados}` : diasPassados
    horas.textContent = horasPassados < 10 ? `0${horasPassados}` : horasPassados
    minutos.textContent = minutosPassados < 10 ? `0${minutosPassados}` : minutosPassados
    segundos.textContent = segundosPassados < 10 ? `0${segundosPassados}` : segundosPassados


})