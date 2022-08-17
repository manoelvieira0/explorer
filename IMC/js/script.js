import { Modal } from './modal.js'

// Variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const showsAlertError = notANumber(weight) || notANumber(height)

  if(showsAlertError) {
    console.log('mostrar o alerta de erro')
    return;
  }  

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}

function notANumber(value){
  return isNaN(value) || value == ''
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}