const generatedPin = document.getElementById('generate-pin');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => { 
    const pin = Math.round(Math.random() * (9999 - 1000) + 1000);
    generatedPin.value = pin;
})