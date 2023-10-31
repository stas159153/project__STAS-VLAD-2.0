function fun(){
    const chetka =document.querySelectorAll('.game-1__text2')
    const button = document.querySelectorAll('.game-1__button')
    const result = document.querySelectorAll('.result')
    const pk = document.querySelectorAll('.pk')
    const input = document.querySelectorAll('.input')
    const kalkulate = document.querySelectorAll('.game-2__button')
  const g3input = document.querySelector('.game-3__input')
  const g3button = document.querySelector('.game-3__button')
  const g3result = document.querySelector('.game-3__result')
  const g3text = document.querySelector('.game-3__text')
  const check = document.querySelector('#check-5')
  const wrapper = document.querySelector('.wrapper-2')

    let  chet1 = 0
    let chet2 = 0
    let random 

    button[1].addEventListener('click', event =>{
        random = Math.floor(Math.random() * 3)
       if(random == 0){
        chet1 ++
      chetka[1].textContent = chet1
            result[0].textContent ='Ви виграли'
            pk[0].textContent ='Папір'
           result[0].style.color = 'green'

        }
        else if(random == 1){
            chet2 ++
          chetka[0].textContent = chet2
                result[0].textContent ='Ви програли'
                pk[0].textContent ='Камінь'
               result[0].style.color = 'red'
    
            }
        
            else if(random == 2){       
                    result[0].textContent ='Нічія'
                    pk[0].textContent ='Ножниці'  
                    result[0].style.color = 'gray'
                }
    })
    
    button[0].addEventListener('click', event =>{
        random = Math.floor(Math.random() * 3)
       if(random == 0){
        chet1 ++
      chetka[1].textContent = chet1
            result[0].textContent ='Ви виграли'
            pk[0].textContent ='Ножниці'
           result[0].style.color = 'green'

        }
        else if(random == 1){
            chet2 ++
          chetka[0].textContent = chet2
                result[0].textContent ='Ви програли'
                pk[0].textContent ='Папір'
               result[0].style.color = 'red'
    
            }
        
            else if(random == 2){       
                    result[0].textContent ='Нічія'
                    pk[0].textContent ='Камінь'  
                    result[0].style.color = 'gray'
                }
    })
    
    button[2].addEventListener('click', event =>{
        random = Math.floor(Math.random() * 3)
       if(random == 0){
        chet1 ++
      chetka[1].textContent = chet1
            result[0].textContent ='Ви виграли'
            pk[0].textContent ='Камінь'
           result[0].style.color = 'green'

        }
        else if(random == 1){
            chet2 ++
          chetka[0].textContent = chet2
                result[0].textContent ='Ви програли'
                pk[0].textContent ='Ножниці'
               result[0].style.color = 'red'
    
            }
        
            else if(random == 2){       
                    result[0].textContent ='Нічія'
                    pk[0].textContent ='Папір' 
                    result[0].style.color = 'gray' 
                }
    })
    let ress 
    kalkulate[0].addEventListener('click',event =>{
      ress = +input[0].value + +input[1].value
      input[2].textContent = ress
      console.log(ress);
    })
    kalkulate[1].addEventListener('click',event =>{
      ress = +input[0].value - +input[1].value
      input[2].textContent = ress
      console.log(ress);
    })
    kalkulate[2].addEventListener('click',event =>{
      ress = +input[0].value * +input[1].value
      input[2].textContent = ress
      console.log(ress);
    })
    kalkulate[3].addEventListener('click',event =>{
      ress = +input[0].value / +input[1].value
      input[2].textContent = ress
      console.log(ress);
    })
    g3button.addEventListener('click', event =>{
      let da3te = new Date()
    let g3 =  +g3input.value
    })



    check.addEventListener('click', e =>{
    wrapper.classList.toggle('sss')
    })
  
}
fun()