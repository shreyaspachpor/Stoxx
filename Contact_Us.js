function validateInput(inputText, regex, errorMessage) {
    inputText.onfocus = function() {
        inputText.style.border = ''; 
    };

    if (inputText.value.match(regex)) {
        return true;
    } else {
        alert(errorMessage);
        inputText.focus();
        inputText.style.border = '1px solid red'; 
        return false;
    }
}

function onSubmit(form) {
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneFormat = /^\d{10}$/;

    var emailValid = validateInput(form.email, emailFormat, "Invalid Email address !!");
    var numberValid = validateInput(form.phone, phoneFormat, "Invalid Phone number !!");

    if (emailValid && numberValid) {
        alert("Form submitted successfully!");
        return true; 
    } else {
        return false;
    }
}
