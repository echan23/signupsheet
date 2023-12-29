let numberInput = document.getElementById("phone");
let numberError = document.getElementById("numberInvalid");
let nameInput = document.getElementById("name");
let weightInput = document.getElementById("weight");
let field = document.getElementById("field");
let emailInput = document.getElementById("emailInput");
let emailError = document.getElementById("emailInvalid");

function validateNumber(){
    if(numberInput.validity.patternMismatch){
        numberError.textContent = "Invalid phone number";
    } else{
        numberError.textContent = "";
    }
}
numberInput.addEventListener("input", validateNumber);

function validateEmail(){
    if(!emailInput.validity.valid){
        emailError.textContent = "Please enter a valid email"
    } else{
        emailError.textContent = "";
    }
}
emailInput.addEventListener("input", validateEmail);

function validateWeight(){
    let weightValue = parseInt(weightInput.value, 10);
    if(weightValue>200){
        field.style.backgroundImage = 'url("https://i.pinimg.com/564x/29/a5/71/29a5716a3f64ea7566c9c03129306fe6.jpg")';
    } else{
        field.style.backgroundImage = 'url("https://i.pinimg.com/736x/22/ff/57/22ff578f7bb851cfb7b772666a5bd8d8.jpg")';
    }
}
weightInput.addEventListener("input", validateWeight); 

function validateAndSubmit() {
    if (nameInput.value === "") {
        alert("Name must be filled out");
        return false;
    }
    if (emailInput.value === "") {
        alert("Email must be filled out");
        return false;
    }
    if (numberInput.value === "") {
        alert("Phone Number must be filled out");
        return false;
    }
    if (weightInput.value === "") {
        alert("Weight must be filled out");
        return false;
    }

    document.getElementById("form").submit();
}