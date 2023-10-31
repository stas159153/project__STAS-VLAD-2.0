

  const g4box = document.querySelector(".game-4__box");
  const g4conteiner = document.querySelector(".game-4__conteiner");
  const nineyoy  = document.querySelector('.nine')
  const ddd = document.querySelector('.dddd')
  const wrapper = document.querySelector('.wrapper-2')
  const modal = document.querySelectorAll('.madal__img')
  const madal = document.querySelector('.modal')

function name() {
  
}
  let adaptive = 720
  if (Number(window.innerWidth) + 0 <= 833) {
    adaptive = 500;
    console.log(window.innerWidth);
  }
  if (Number(window.innerWidth) + 0 <= 610) {
    adaptive = 270;
    console.log(window.innerWidth);
  }
  g4conteiner.style.width = adaptive + "px";
  g4conteiner.addEventListener("click", (event) => {
    console.log(event);
    let a;
    let b;
    if ( adaptive >= 720) {
      a = event.offsetX
      b = event.offsetY
      g4box.style.left = a - 25 + "px";
      g4box.style.top = b - 25 + "px";
      console.log(a, b);
    } else if (!window.screenLeft && adaptive >= 500) {
      a = event.offsetX
      b = event.offsetY
      g4box.style.left = a - 25 + "px";
      g4box.style.top = b - 25 + "px";
      console.log(a, b);
      if(event.offsetX >= 493){
        madal.classList.remove('mt')
        wrapper.classList.remove('sss')
        modal[0].addEventListener('click', event => {
          wrapper.style.backgroundImage = 'url(img/1hallween.gif)'
          madal.classList.add('mt')
        
        })
        modal[1].addEventListener('click', event => {
          wrapper.style.backgroundImage = 'url(img/newgif.gif)'
          madal.classList.add('mt')
          
        })
        modal[2].addEventListener('click', event => {
          wrapper.style.backgroundImage = 'url(img/hallween2.gif)'
          madal.classList.add('mt')
         
        })
      }
    } else if (!window.screenLeft && adaptive >= 270) {
      a = event.offsetX
      b = event.offsetY
      g4box.style.left = a - 25 + "px";
      g4box.style.top = b - 25 + "px";
      console.log(a, b);
      if(event.offsetX >= 253){
        madal.classList.remove('mt')
        wrapper.classList.remove('sss')
        modal[0].addEventListener('click', event => {
          wrapper.style.backgroundImage = 'url(img/1hallween.gif)'
          madal.classList.add('mt')
           wrapper.style.color = 'white'
        })
        modal[1].addEventListener('click', event => {
          wrapper.style.backgroundImage = 'url(img/newgif.gif)'
          madal.classList.add('mt')
          wrapper.style.color = 'white'
        })
        modal[2].addEventListener('click', event => {
          wrapper.style.backgroundImage = 'url(img/hallween2.gif)'
          madal.classList.add('mt')
          wrapper.style.color = '#acacac'
        })
    }
  }
    if(event.offsetX >= 703){
      madal.classList.remove('mt')
      wrapper.classList.remove('sss')
      modal[0].addEventListener('click', event => {
        wrapper.style.backgroundImage = 'url(img/1hallween.gif)'
        madal.classList.add('mt')
         wrapper.style.color = 'white'
      })
      modal[1].addEventListener('click', event => {
        wrapper.style.backgroundImage = 'url(img/newgif.gif)'
        madal.classList.add('mt')
        wrapper.style.color = 'white'
      })
      modal[2].addEventListener('click', event => {
        wrapper.style.backgroundImage = 'url(img/hallween2.gif)'
        madal.classList.add('mt')
        wrapper.style.color = '#acacac'
      })
    
    }

  });

g4conteiner.addEventListener('click', event =>{
console.log(event.offsetX,event.offsetY);
})


name()