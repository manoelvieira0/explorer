// callback function

function sayMyName(name) {
  name()
}

sayMyName(
  () => {
    console.log('Estou em uma callback')
  }
)