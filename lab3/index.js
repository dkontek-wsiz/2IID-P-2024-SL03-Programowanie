// console.log('index');

// document.getElementById('span1').innerHTML = 'test';

// var zmienaVar = 'var';
// let zmienaLet = 'let';
// const stala = 'test';

// console.log(stala);

// let test1 = '';

// if(test1 === '' || 1 == -1) {
//     console.log('test');
// }

// if("0" === 0) {
//     //var test = "Test";
// }
// else {
//     test1 = "Test1";
// }

// console.log(test1);

// console.log(Test(5));

// function Test(input) {
//     //if(input === 5 && input/2 === 2.5)
//     if(input !== 5 || input/2 !== 2.5)
//     {
//         return 1;
//     }
//     else {
//         return 0;
//     }

// }

//Zad 1
function zmienTekst() { //zmien_tekst
    alert("Witaj na stronie");
}

// const test = 1;
// console.log("Test " + test + " Test2");
// console.log(`Test ${test} Test2`);

// const liczba = "5";
// console.log(liczba + liczba);
// console.log(+liczba + +liczba);


//Zadanie 2
for(let i = 0; i < 100; i += 2) {
    console.log(i)
}

// Zadanie 3
/*const a = +prompt("Podaj a");
const b = +prompt("Podaj b");
alert(a + b);
*/

//Zadanie 4
const clock = document.getElementById('clock');
setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
   //document.getElementById('clock')
    clock.innerHTML = `${hour}:${minute}:${second}`
}, 1000);


//Zadanie 5

const guessNumberElement = document.getElementById('guessNumber');
const number = Math.floor(Math.random() * 100);
let trys = 0;
function tryGuess() {
    trys++;
    const value = +guessNumberElement.value;
    if(value === number) {
        alert(`Zgadłeś za ${trys}`);
    }
    else if(value > number) {
        alert("Liczba jest mniejsza")   
    } else if(value < number) {
        alert("Liczba jest większa")   
    }
}
