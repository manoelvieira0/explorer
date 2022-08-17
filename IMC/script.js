// Variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event){
  event.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value

  console.log(weight, height)
}