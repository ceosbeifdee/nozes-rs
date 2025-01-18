// Date.UTC()
// const anoAtual = new Date().getFullYear()
// const mesAtual = new Date().getMonth()
// const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate()

// const anos = document.querySelector("#anos")
// const meses = document.querySelector("#meses")
// const semanas = document.querySelector("#semanas")
// const dias = document.querySelector("#dias")
// const horas = document.querySelector("#horas")
// const minutos = document.querySelector("#minutos")
// const segundos = document.querySelector("#segundos")

// const relogio = setInterval(function time() {
//     const encontro = new Date("2024-11-16T23:38:00-03:00")
//     const hoje = new Date()

//     const diff = new Date(hoje - encontro)
    
//         const anosPassados = diff.getUTCFullYear() - 1970
    
//         const mesesPassados = diff.getUTCMonth()
    
//         const diasPassados = 

//         const semanasPassadas = Math.floor(diasPassados / 7)
    
//         const horasPassadas = diff.getUTCHours()

//         const minutosPassados = diff.getUTCMinutes()

//         const segundosPassados = diff.getUTCSeconds()

//     anos.textContent = anosPassados < 10 ? `0${anosPassados}` : anosPassados
//     meses.textContent = mesesPassados < 10 ? `0${mesesPassados}` : mesesPassados
//     semanas.textContent = semanasPassadas < 10 ? `0${semanasPassadas}` : semanasPassadas
//     dias.textContent = diasPassados < 10 ? `0${diasPassados}` : diasPassados
//     horas.textContent = horasPassadas < 10 ? `0${horasPassadas}` : horasPassadas
//     minutos.textContent = minutosPassados < 10 ? `0${minutosPassados}` : minutosPassados
//     segundos.textContent = segundosPassados < 10 ? `0${segundosPassados}` : segundosPassados
// })