// const test = 5;
//  const arr = [1, 2, 3];
//  const newArr = [];
//  arr.forEach((value) => {
//     newArr.push(value *2);
//  });
//  const newArr2 = arr.map(v => {
//     if(v === 3)
//     {
//         return 1;
//     }
//     return {i: 5};
//  });
//  console.log(newArr2);
//  const sum = arr.reduce((a, b) => {
//     console.log(a, b);
//     return a + b;
//  }, 0);
//  console.log(sum);



// switch (new Date().getDay()) {
//     case 4:
//     case 5:
//       text = "Soon it is Weekend";
//       break;
//     case 0:
//     case 6:
//       text = "It is Weekend";
//       break;
//     default:
//       text = "Looking forward to the Weekend";
//   }

//==

//   if(new Date().getDate() === 4 || new Date().getDate() === 5)
//   {
//     text = "Soon it is Weekend";
//   }
//   else if(new Date().getDate() === 0 || new Date().getDate() === 6)
//   {
//     text = "It is Weekend";
//   }
//   else {
//     text = "Looking forward to the Weekend";
//   }

function Ask() {
    const age = Number(prompt('Podaj wiek'));

    if(age >= 18) 
    {
        console.log('jesteś pełnoletni');
    }
    else {
        console.log('jesteś niepełnoletni');
    }

    console.log(age >= 18? 'jesteś pełnoletni': 'jesteś niepełnoletni');
}



//zad2
function convert(cel) {
    return (cel * 1.8) + 32
}

console.log(convert(10));


//zad3
const arr = [1, 2, 3];

for(let i = 0; i < 100000;  i++){
    arr.push(Math.ceil(Math.random() * 100));
}

console.log(arr);

// let sum2 = 0;

// for(let i = 0; i < arr.length; i++)
// {
//     sum2 += arr[i];
// }
//suma
const sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);

//parzyste
console.log('parzyste', arr.filter(x => x % 2 === 0));

//razy 3
console.log(arr.map(x => x * 3));

//index
console.log(arr.findIndex(x => x === 2));

//srednia
console.log(sum / arr.length);

//najwieksza
// let max = 0;
// arr.forEach((value) => {
//     if(max < value){
//         max = value;
//     }
// });
console.log(Math.max(...arr));

//iloc wystapien
console.log(arr.filter(x => x === 100).length);


//zad 4
const fib = [0, 1];

for(let i = 2; i < 100; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
}

console.log(fib);