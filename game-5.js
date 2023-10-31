function fun (){
    let a = 0
    const str =document.querySelector('.swiper-button-prev')
    const str2 =document.querySelector('.swiper-button-next')
    const str3 =document.querySelector('.game-5__text')
    const swiper = new Swiper('.sample-slider', {
        loop: true,                         //loop
        // autoplay: {                         //autoplay
        //     delay: 2000,  
        // },       
        navigation: {                       //navigation(arrow)
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {                       //pagination(dots)
            el: '.swiper-pagination',
        },
    })
    str2.addEventListener('click', event =>{
        if( a != 10){
        str3.classList.toggle('not')
        str3.classList.toggle('note')
        a++
        console.log(a);
        }
        else{a = 0}
    })
    str.addEventListener('click', event =>{
        if( a <= 0){
            str3.classList.toggle('not')
            str3.classList.toggle('note')
            a--
            console.log(a);
            }
            else{a = 0}
    })
    
}
fun()