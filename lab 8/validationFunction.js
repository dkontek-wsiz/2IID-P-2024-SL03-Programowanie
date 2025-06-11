function showError(field, message) {
    field.textContent = message;
    field.style.display = 'block';
}

function clearError(field) {
    field.textContent = '';
    field.style.display = 'none';
}


function checkMinimalLength(field, fieldError, minLength = 3) {
    const value = field.value;

    if(value.length >= minLength) {
        clearError(fieldError);
        return true;
    }

    showError(fieldError, `Podana wartość powinna mieć minimum ${minLength} znakow`);
    return false;
}

function checkEmail(input, error) {
    const emailValue = input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '') {
        showError(error, 'Adres e-mail jest wymagany.');
        return false;
    } 
    if (!emailRegex.test(emailValue)) {
        showError(error, 'Wprowadź poprawny adres e-mail.');
        return false;
    }  
    clearError(error);
    return true;
}

function checkPassword(passwordValue, passwordError) {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(passwordValue)) {
        showError(passwordError, 'Hasło musi mieć min. 8 znaków, zawierać dużą literę, małą literę i cyfrę.');
        return false;
    }

    clearError(passwordError);
    return true;
}