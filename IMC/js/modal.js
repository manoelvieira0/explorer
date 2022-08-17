export const Modal = {
  whapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  open() {
    Modal.whapper.classList.add('open')
  },
  close() {
    Modal.whapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', handleKeydown)
function handleKeydown(event){
  if(event.key == 'Escape'){
    Modal.close()
  }
}