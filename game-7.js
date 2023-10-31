function name() {
    const time = document.querySelectorAll('.span')
    const input = document.querySelector('.game-3__input')
    const button = document.querySelector('.game-3__button')
    let c = 0
    let f = 0
    let  a = 0
    button.addEventListener('click', e => {
        f += Number(input.value % 60)
        c += (Number(Number(input.value)  - Number(input.value) % 60) / 60)
        if(Math.round(Number(input.value / 60 )) >= 1){
            if(f >= 60){
                f = 0
                c +=1
        }
        if(c >= 24){
            a += c / 24
            time[0].textContent = a.toFixed(0) +'ДН'
            console.log(a);
            c = 0
        }
            time[1].textContent =  c +'год'
            time[2].textContent = f + 'МИН'
    }
    })
}
name()