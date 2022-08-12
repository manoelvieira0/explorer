/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt('Informe o nome do(a) Aluno(a): ')
let n1 = prompt('Qual a nota da primeira prova: ')
let n2 = prompt('Qual a nota da segunda prova: ')
let n3 = prompt('Qual a nota da terceira prova: ')

n1 = Number(n1)
n2 = Number(n2)
n3 = Number(n3)

let media = (n1 + n2 + n3) / 3

let result = media >= 6

media = media.toFixed(1)

if(result) {
  alert('Parabéns '+ student +' você passou! Sua média foi de: '+ media)
} else if(media < 6){
  alert(student + ', não foi dessa vez, estude para a prova de recuperação! Sua média foi de: '+ media)
}

