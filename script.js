window.addEventListener('keydown', handleKeyDown);


const display = document.getElementById('display');
let currentInput = '';

function updateDisplay() {
    display.value = currentInput;
}

function appendValue(value) {
    currentInput += value;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function handleKeyDown(event) {
  const key = event.key;
  const validKeys = /^[0-9+\-*/.C=]$/;

  if (validKeys.test(key)) {
      event.preventDefault();
      const button = document.querySelector(`button[data-key="${key}"]`);
      if (button) {
          button.click();
      }
  }
}


function handleButtonClick(event) {
  const buttonText = event.target.innerText || event.key;
    if (buttonText === 'AC') {
        clearDisplay();
    } else if (buttonText === '=') {
        calculateResult();
    } else {
        appendValue(buttonText);
    }
}

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
