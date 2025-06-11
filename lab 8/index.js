const form = document.querySelector('form');

//Zad2
const nameInput = document.querySelector('#name');
const nameToDisplay = document.querySelector('#nameToDisplay');
const nameError = document.querySelector('#nameError');
nameInput.addEventListener('input', () => {
    nameToDisplay.textContent = nameInput.value;
    checkMinimalLength(nameInput, nameError);
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


const surnameInput = document.querySelector('#surname');
const surnameError = document.querySelector('#surnameError');
surnameInput.addEventListener('blur', () => {
    checkMinimalLength(surnameInput, surnameError);
});


const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#emailError');

emailInput.addEventListener('blur', function() {
    checkEmail(emailInput, emailError);
});

const passwordError = document.getElementById('passwordError')
passowrdInput.addEventListener('blur', function() {
    checkPassword(passowrdInput.value, passwordError);
});

function formIsValid() {
    let valid = true;

    valid = checkMinimalLength(nameInput, nameError) && valid;
    valid = checkMinimalLength(surnameInput, surnameError) && valid;
    valid = checkEmail(emailInput, emailError) && valid;
    valid = checkPassword(passowrdInput.value, passwordError) && valid;

    return valid;
}

form.addEventListener('submit', event => {
    event.preventDefault();
    hobbies();

    const isValid = formIsValid();

    if(isValid) {
        alert('Formularz poprawny')
    }
    else {
        console.log('Błędy');
    }
});


const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('keypress', function(event) {
    if(event.key >= '0' && event.key <= '9')
        return true;

    event.preventDefault();
    return false;
        
});
