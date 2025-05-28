const form = document.querySelector('form');

//Zad2
const nameInput = document.querySelector('#name');
const nameToDisplay = document.querySelector('#nameToDisplay');
nameInput.addEventListener('input', () => {
    nameToDisplay.textContent = nameInput.value;
});


//Zad3
const passowrdInput = document.querySelector('#password');
const showHidePassowrdInput = document.querySelector('#showHidePassword');
const showHidePassowrdLabel = document.querySelector('label[for=showHidePassword]');
showHidePassowrdInput.addEventListener('change', () => {
    if(showHidePassowrdInput.checked) {
        passowrdInput.type = 'text';
        showHidePassowrdLabel.textContent = 'Ukryj hasło';
    }
    else {
        passowrdInput.type = 'password';
        showHidePassowrdLabel.textContent = 'Pokaż hasło';
    }
   
});

//Zad 4
const hobbieList = document.querySelector('ul');
function hobbies() {
    hobbieList.replaceChildren(); //czyszczenie listy

    const selectedHobbies = document.querySelectorAll('input[name="hobbies"]:checked');

    selectedHobbies.forEach(hobby => {
        const item = document.createElement('li');
        item.textContent = hobby.value;
        hobbieList.appendChild(item);
    });
}

form.addEventListener('submit', event => {
    event.preventDefault();
    
    hobbies();
});


//Zad 5
const phoneContainer = document.querySelector('#phone-container');
const showHidePhoneInput = document.querySelector('#showHidePhone');
showHidePhoneInput.addEventListener('change', () => {
    phoneContainer.hidden = showHidePhoneInput.checked;
});


//Zad 6
const countrySelect = document.querySelector('#country');
const franceOption = new Option('Francja', 'FR');
countrySelect.add(franceOption);