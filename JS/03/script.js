/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

alert('Informe dois números: ')
let numberOne = prompt('Informe o primeiro número: ')
let numberTwo = prompt('Informe o segundo número: ')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mul = numberOne * numberTwo
const div = numberOne / numberTwo

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação' + mul)
alert('Divisão: ' + div)