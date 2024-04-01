// Get references to the buttons and counter display
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');
const counterDisplay = document.getElementById('counter');

// Initialize counter value
let counterValue = 0;

// Event listeners for button clicks
incrementButton.addEventListener('click', () => {
    counterValue += 1;
    counterDisplay.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    counterDisplay.textContent = counterValue;
});

resetButton.addEventListener('click', () => {
    counterValue = 0;
    counterDisplay.textContent = counterValue;
});