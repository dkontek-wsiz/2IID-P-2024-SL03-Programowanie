// const div = document.getElementById('test');
// const div2 = document.getElementsByClassName('divClass');
// const div3 = document.querySelector('#test');
// const div4 = document.querySelector('.divClass');
// const div5 = document.querySelector('#test.divClass');
// const div6 = document.querySelector('div');

// console.log(div6.children);
// console.log(div6.textContent);
// console.log(div6.innerHTML);
// console.log(div6.classList);

// div6.innerHTML = "<h1>Test</h1>";
// document.getElementById('input').addEventListener('', (ev)=> {
//     console.log(ev);
//     if(ev.key === 'd')
//         div6.style.background = 'red';
//     else {
//         div6.style.background = 'blue';
//     }
// });
// function test() {
//     console.log('test');
// }

//Zad1
function silnia(n) {
    return n > 1? n * silnia(n - 1): 1;
}

console.log(silnia(10));

//zad2
const btns = document.querySelectorAll('button');
let selectedBtn = null;
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('selected');
        if(selectedBtn)
        {
            selectedBtn.classList.remove('selected');
        }
        selectedBtn = btn;
    });
});


//zad 3 
const spanToHide = document.querySelector('span');
const btn = document.querySelector('#secretBtn');

btn.addEventListener('click', toogleVisibility);

function toogleVisibility() {
    spanToHide.style.visibility = spanToHide.style.visibility === 'hidden'? 'visible': 'hidden';
}


//Zad4

const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const saveBtn = document.querySelector('#save');
const list = document.querySelector('.list');
const table = document.querySelector("table");

saveBtn.addEventListener('click', () => {
    const name = nameInput.value;
  
    const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li); 
    
    //zad 5
    const surname = surnameInput.value;
    const newRow = table.insertRow();
    const nameCell = newRow.insertCell();
    nameCell.textContent = name;
    const surnameCell = newRow.insertCell();
    surnameCell.textContent = surname;
});
