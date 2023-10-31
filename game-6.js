function name(params) {

const button6 = document.querySelectorAll('.game-6__button')
const text6 = document.querySelector('.game-6__text')
button6.forEach((element) => {
    element.addEventListener('input', (e) => {
    
       let s = [Number(button6[0].value),Number(button6[1].value),Number(button6[2].value)]
        text6.textContent = Math.max(...s)
    })
  });
}
  name()

