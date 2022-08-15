/*
Nesse desafio você irá criar uma lista de estudantes e, 
cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno 
obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: 'Méssia',
    noteOne: 7,
    noteTwo: 9,
  },
  {
    name: 'Manoel',
    noteOne: 3,
    noteTwo: 8,
  },
  {
    name: 'Adrielly',
    noteOne: 10,
    noteTwo: 8,
  },
]

function media(firstnote, secondnote){
  return (firstnote + secondnote) / 2
}

function aproved(student){
  if(media(student.noteOne, student.noteTwo) >= 7){
    return `Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`
  } else {
    return `Não foi dessa vez, ${student.name}! Tente novamente!`
  }
}

for(let student of students){
  alert(`
  A média do(a) aluno(a) ${student.name} é: ${media(student.noteOne, student.noteTwo)}
  ${aproved(student)}
  `)
}


