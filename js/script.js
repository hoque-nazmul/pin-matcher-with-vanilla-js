const generatedPin = document.getElementById('generate-pin');
const generateBtn = document.getElementById('generate-btn');
const numbers = document.getElementsByClassName('number');
const userPinField = document.getElementById('user-pin');
const submitBtn = document.getElementById('btn-submit');
const successMsg = document.getElementById('success-msg');
const errorMsg = document.getElementById('error-msg');
const emptyMsg = document.getElementById('empty-msg');
const submitTracker = document.getElementById('action-left');
let errorSubmitCounter = 0;
let pin = '';

const displayMsg = (msg) => { 
    msg.style.display = 'block';
    setTimeout(() => {
        msg.style.display = 'none';
    }, 3000);
}

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

submitBtn.addEventListener('click', function () {
    if (generatedPin.value && pin && generatedPin.value === pin) {
        displayMsg(successMsg);
    } else { 
        if (!pin) {
            displayMsg(emptyMsg);
        } else { 
            displayMsg(errorMsg);
        }
        errorSubmitCounter += 1;
        submitTracker.innerText = submitTracker.innerText.replace(submitTracker.innerText[0], errorSubmitCounter);
        if (errorSubmitCounter === 3) {
            submitBtn.setAttribute("disabled", true);
        }
    }
});