const generatedPin = document.getElementById('generate-pin');
const generateBtn = document.getElementById('generate-btn');
const numbers = document.getElementsByClassName('number');
const userPinField = document.getElementById('user-pin');
let pin = '';

generateBtn.addEventListener('click', () => {
    const pin = Math.round(Math.random() * (9999 - 1000) + 1000);
    generatedPin.value = pin;
});

[...numbers].forEach(num => {
    num.addEventListener('click', () => {
        pin += num.innerHTML;
        userPinField.value = pin;
    });
});