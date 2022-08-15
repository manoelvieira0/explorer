/*

Nesse desafio, você irá solicitar ao usuário que ele insira 
dois números e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes).

*/

alert('Insira dois números a seguir: ')
const numberOne = Number(prompt('Insira o primeiro número: '))
const numberTwo = Number(prompt('Insira o segundo número: '))

alert(`A soma dos dois números é: ${numberOne + numberTwo}`)
alert(`A subtração dos dois números é: ${numberOne - numberTwo}`)
alert(`A multiplicação dos dois números é: ${numberOne * numberTwo}`)
alert(`A divisão dos dois números é: ${numberOne / numberTwo}`)
alert(`o resto da divisão dos dois números é: ${numberOne % numberTwo}`)

const sum = numberOne + numberTwo
if (sum % 2 == 0) {
  alert('A soma dos dois números é par!')
} else {
  alert('A soma dos dois números é impar!')
}

if(numberOne == numberTwo) {
  alert('Os dois números inseridos são iguais')
} else {
  alert('Os dois números inseridos são diferentes')
}