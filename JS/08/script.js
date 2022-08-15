/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const pacients = [
  {
    name: 'Luiz',
    age: 20,
    weight: 100,
    height: 190,
  }, 
  {
    name: 'Carlos',
    age: 18,
    weight: 75,
    height: 175,
  }, 
  {
    name: 'Alexandra',
    age: 27,
    weight: 65,
    height: 160,
  }, 
  {
    name: 'Renato',
    age: 24,
    weight: 59,
    height: 160,
  }, 
]

let pacientsDados = []

for(let pacient of pacients){
  pacientsDados.push(pacient.name, pacient.age, pacient.weight, pacient.height)  
  alert(`O paciente ${pacient.name} tem ${pacient.age} anos, peso de ${pacient.weight}kg e altura de ${pacient.height}cm`)
}


