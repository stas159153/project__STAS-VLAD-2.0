// Task #1
const inpYear = document.querySelector(".input__year");
const randomNum = document.querySelector(".number");
const searchBtn = document.querySelector(".input__icon");
function d (){


searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inpYears = +inpYear.value;
  if ((inpYears % 4 == 0 && inpYears % 100 != 0) || inpYears % 400 == 0) {
    randomNum.textContent = inpYears + " рік народження є високосним.";
    randomNum.style.color = 'green'
  } else {
    randomNum.textContent = inpYears + " рік народження не є високосним роком.";
    randomNum.style.color = 'red'
  }
});

// Task #2
document.querySelector(".form__inpA").addEventListener("submit", function(event) {
    event.preventDefault();
    checkGuess();
});

function checkGuess() {
    let random = Math.floor(Math.random() * 10);
    let userInput = parseInt(document.querySelector(".input__yearA").value);
    let resultMessage = document.querySelector(".numberA");

    if (userInput >= 0 && userInput <= 9) {
        if (userInput === random) {
            resultMessage.textContent = "Вітаю, ви вгадали число! Число було: " + random;
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = "Вітаю, ви не вгадали число! Правильне число було: " + random;
            resultMessage.style.color = 'red';
        }
    } else {
        resultMessage.textContent = "Будь ласка, введіть число від 0 до 9.";
        resultMessage.style.color = 'black';
    }
}

//Scientists//
const square = document.querySelector(".the__second__btn1");
const squareOne = document.querySelector(".the__second__btn2");
const squareTwo = document.querySelector(".the__second__btn3");
const squareThree = document.querySelector(".the__second__btn4");
const squareFour = document.querySelector(".the__first__btn5");
const squareFive = document.querySelector(".the__first__btn6");
const squareSix = document.querySelector(".the__first__btn7");
const squareSeven = document.querySelector(".the__first__btn8");
const squareEight = document.querySelector(".the__word__btn9");
const graySquareOne = document.querySelector(".gray__square1");
const graySquareTwo = document.querySelector(".gray__square2");
const graySquareThree = document.querySelector(".gray__square3");
const graySquareFour = document.querySelector(".gray__square4");
const graySquareFive = document.querySelector(".gray__square5");
const graySquareSix = document.querySelector(".gray__square6");
const graySquareSeven = document.querySelector(".gray__square7");
const graySquareEight = document.querySelector(".gray__square8");
const graySquareNine = document.querySelector(".gray__square9");
const graySquareTen = document.querySelector(".gray__square10");
const graySquareEleven = document.querySelector(".gray__square11");
const graySquareTwelve = document.querySelector(".gray__square12");



const scientists = [ 
    { 
        name: "Albert", 
        surname: "Einstein", 
        born: 1879, 
        dead: 1955, 
        id: 1 
    }, 
    { 
        name: "Isaac", 
        surname: "Newton", 
        born: 1643, 
        dead: 1727, 
        id: 2 
    }, 
    { 
        name: "Galileo", 
        surname: "Galilei", 
        born: 1564, 
        dead: 1642, 
        id: 3 
    }, 
    { 
        name: "Marie", 
        surname: "Curie", 
        born: 1867, 
        dead: 1934, 
        id: 4 
    }, 
    { 
        name: "Johannes", 
        surname: "Kepler", 
        born: 1571, 
        dead: 1630, 
        id: 5 
    }, 
    { 
        name: "Nicolaus", 
        surname: "Copernicus", 
        born: 1473, 
        dead: 1543, 
        id: 6 
    }, 
    { 
        name: "Max", 
        surname: "Planck", 
        born: 1858, 
        dead: 1947, 
        id: 7 
    }, 
    { 
        name: "Katherine", 
        surname: "Blodgett", 
        born: 1898, 
        dead: 1979, 
        id: 8 
    }, 
    { 
        name: "Ada", 
        surname: "Lovelace", 
        born: 1815, 
        dead: 1852, 
        id: 9 
    }, 
    { 
        name: "Sarah E.", 
        surname: "Goode", 
        born: 1855, 
        dead: 1905, 
        id: 10 
    }, 
    { 
        name: "Lise", 
        surname: "Meitner", 
        born: 1878, 
        dead: 1968, 
        id: 11 
    }, 
    { 
        name: "Hanna", 
        surname: "Hammarström", 
        born: 1829, 
        dead: 1909, 
        id: 12 
    } 
];

function displayNineteenthCenturyScientists() {
    const ninthCenturyScientists = scientists.filter(scientist => scientist.born >= 1800 && scientist.born < 1900);
    const graySquare = [graySquareOne, graySquareTwo, graySquareThree, graySquareFour, graySquareFive, graySquareSix, graySquareSeven, graySquareEight, graySquareNine, graySquareTen, graySquareEleven, graySquareTwelve];
    graySquare.forEach(event => {
        event.innerHTML = '';
    });
    for (let i = 0; i < ninthCenturyScientists.length && i < graySquare.length; i++) {
        graySquare[i].innerHTML = `${ninthCenturyScientists[i].name} ${ninthCenturyScientists[i].surname}`;
        graySquare[i].style.textAlign = 'center';
    }
}

squareSeven.addEventListener("click", displayNineteenthCenturyScientists);

//filter//

function displaySortedScientists() {
    const sortedScientists = scientists.slice().sort((a, b) => a.name.localeCompare(b.name));
    const graySquare = [graySquareOne, graySquareTwo, graySquareThree, graySquareFour, graySquareFive, graySquareSix, graySquareSeven, graySquareEight, graySquareNine, graySquareTen, graySquareEleven, graySquareTwelve];
    graySquare.forEach(e => {
        e.innerHTML = '';
    });
    for (let i = 0; i < sortedScientists.length && i < graySquare.length; i++) {
        graySquare[i].innerHTML = `${sortedScientists[i].name} ${sortedScientists[i].surname}`;
        graySquare[i].style.textAlign = 'center';
    }
}
squareSix.addEventListener("click", displaySortedScientists);


// #3

function calculateYearsLived() {
    const sortedToYear = scientists.sort((a, b) => b.dead - a.born);
    const graySquare = [graySquareOne, graySquareTwo, graySquareThree, graySquareFour, graySquareFive, graySquareSix, graySquareSeven, graySquareEight, graySquareNine, graySquareTen, graySquareEleven, graySquareTwelve];
    graySquare.forEach(element => {
        element.innerHTML = '';
    });
    for (let b = 0; b < sortedToYear.length && b < graySquare.length; b++) {
        graySquare[b].innerHTML = `${sortedToYear[b].name} ${sortedToYear[b].surname}`;
        graySquare[b].style.textAlign = 'center';
    }
}

squareFive.addEventListener('click', calculateYearsLived);

// #4
function findScientist() {
    const maxBornYear = Math.max(...scientists.map(s => s.born));
    const findOldYearScientists = scientists.filter(scientist => scientist.born === maxBornYear);
    const graySquare = [graySquareOne, graySquareTwo, graySquareThree, graySquareFour, graySquareFive, graySquareSix, graySquareSeven, graySquareEight, graySquareNine, graySquareTen, graySquareEleven, graySquareTwelve];

    graySquare.forEach(element => {
        element.innerHTML = '';
    });

    for (let c = 0; c < findOldYearScientists.length && c < graySquare.length; c++) {
        graySquare[c].innerHTML = `${findOldYearScientists[c].name} ${findOldYearScientists[c].surname}`;
        graySquare[c].style.textAlign = 'center';
    }
}

squareFour.addEventListener('click', findScientist);

// #5

function findYearAlbert() {
    const albertEinstein = scientists.find(scientist => scientist.name === 'Albert' && scientist.surname === 'Einstein');
    const graySquare = [graySquareOne, graySquareTwo, graySquareThree, graySquareFour, graySquareFive, graySquareSix, graySquareSeven, graySquareEight, graySquareNine, graySquareTen, graySquareEleven, graySquareTwelve];
    
    graySquare.forEach(element => {
        element.innerHTML = '';
    });
    
    if (albertEinstein) {
        graySquare[0].innerHTML = `${albertEinstein.born}`;
        graySquare[0].style.textAlign = 'center';
    }
}

square.addEventListener('click', findYearAlbert);

//#6 

function findScientistsC() {
    const scientistsWithCSurname = scientists.filter(scientist => scientist.surname.startsWith('C'));
    const graySquare = [graySquareOne, graySquareTwo, graySquareThree, graySquareFour, graySquareFive, graySquareSix, graySquareSeven, graySquareEight, graySquareNine, graySquareTen, graySquareEleven, graySquareTwelve];

    graySquare.forEach(element => {
        element.innerHTML = '';
    });

    for (let find = 0; find < scientistsWithCSurname.length && find < graySquare.length; find++) {
        graySquare[find].innerHTML = scientistsWithCSurname[find].surname;
        graySquare[find].style.textAlign = 'center';
    }
}
squareOne.addEventListener('click', findScientistsC);

//#7
function removeScientists() {
    const scientistsWithoutA = scientists.filter(scientist => !scientist.name.startsWith('A'));
    const graySquare = [graySquareOne, graySquareTwo, graySquareThree, graySquareFour, graySquareFive, graySquareSix, graySquareSeven, graySquareEight, graySquareNine, graySquareTen, graySquareEleven, graySquareTwelve];

    graySquare.forEach(element => {
        element.innerHTML = '';
    });

    for (let findA = 0; findA < scientistsWithoutA.length && findA < graySquare.length; findA++) {
        graySquare[findA].innerHTML = scientistsWithoutA[findA].name;
        graySquare[findA].style.textAlign = 'center';
    }
}

squareTwo.addEventListener('click', removeScientists);

//#8
function findBiggerAndSmaller() {
    const maxLifeSpan = Math.max(...scientists.map(scientist => scientist.dead - scientist.born));
    const minLifeSpan = Math.min(...scientists.map(scientist => scientist.dead - scientist.born));
    
    const findBigger = scientists.find(scientist => (scientist.dead - scientist.born) === maxLifeSpan);
    const findSmaller = scientists.find(scientist => (scientist.dead - scientist.born) === minLifeSpan);
    
    const graySquare = [graySquareOne, graySquareTwo, graySquareThree, graySquareFour, graySquareFive, graySquareSix, graySquareSeven, graySquareEight, graySquareNine, graySquareTen, graySquareEleven, graySquareTwelve];

    graySquare.forEach(element => {
        element.innerHTML = '';
    });

    if (findBigger) {
        graySquare[0].innerHTML = `${findBigger.name} ${findBigger.surname}`;
        graySquare[0].style.textAlign = 'center';
    }

    if (findSmaller) {
        graySquare[1].innerHTML = `${findSmaller.name} ${findSmaller.surname}`;
        graySquare[1].style.textAlign = 'center';
    }
}

squareThree.addEventListener('click', findBiggerAndSmaller);

//#9

function findScientistsWithInitials() {
    const scientistsWithInitials = scientists.filter(scientist => {
        const name = scientist.name[0].toLowerCase(); 
        const surname = scientist.surname[0].toLowerCase();
        return name === surname;
    });

    const graySquare = [graySquareOne, graySquareTwo, graySquareThree, graySquareFour, graySquareFive, graySquareSix, graySquareSeven, graySquareEight, graySquareNine, graySquareTen, graySquareEleven, graySquareTwelve];

    graySquare.forEach(element => {
        element.innerHTML = '';
    });

    for (let i = 0; i < scientistsWithInitials.length && i < graySquare.length; i++) {
        graySquare[i].innerHTML = `${scientistsWithInitials[i].name} ${scientistsWithInitials[i].surname}`;
        graySquare[i].style.textAlign = 'center';
    }
}

squareEight.addEventListener('click', findScientistsWithInitials);

//modal

}
d()