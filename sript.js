
let currentInput = "";
const display = document.getElementById('display');

function addInput(char) {
    const operators = ['+', '-', '*', '/', '.', '%'];

    // Prevent consecutive operators
    if (operators.includes(char)) {
        if (currentInput === "" || operators.includes(currentInput.slice(-1))) {
            alert("Cannot input two operators consecutively.");
            return;  // Don't allow consecutive operators
        }
    }

    currentInput += char;
    display.value = currentInput;
}
//This function is used for delete one by one number
    function deleteOne() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}
//This function is used to delete the input in one click

function deleteAll() {
    currentInput = '';
    display.value = currentInput;
}
//This fuction is used to handle a divide by zero exception

function calculate() {
    let expression = currentInput;

    if (expression.includes('/0')) {
        display.value = "Cannot divide by 0";
    } else {
        try {
            display.value = eval(expression);
            currentInput = display.value; // Update currentInput to match display
        } catch (e) {
            display.value = "Error";
        }
    }
}
//This function is used to calculate the squre root

function calculateSquareRoot() {
    if (currentInput !== '') {
        try {
            // Evaluate the input and then calculate the square root
            const result = Math.sqrt(eval(currentInput));
            display.value = result;
            currentInput = result; // Update currentInput to match display
        } catch (e) {
            display.value = "Error";
        }
    }
}

// Event listener for keyboard input
document.addEventListener('keydown', function (event) {
    const key = event.key;

    // Check for number keys and operators
    if (!isNaN(key) || ['+', '-', '*', '/'].includes(key)) {
        addInput(key);
    } else if (key === '.') {
        addInput('.');
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteOne();
    } else if (key === 'Escape') {
        deleteAll();
    } else if (key === 'r') { // Use 'r' key for square root, or choose another key
        calculateSquareRoot();
    }
});
//This function is used to handle the more button
const toggleMore=()=>{
const value=document.getElementById('square')
//console.log(value)
// value.style.display='flex';
if(value.style.display=='flex'){
value.style.display='none'
let inputButton=Array.from(document.getElementsByClassName('input-button'))
console.log(inputButton)
inputButton.forEach(element => {
element.style.height='60px'
element.style.width='60px'
element.style.fontSize='20px'
    
});
}
else{
value.style.display='flex'
let inputButton=Array.from(document.getElementsByClassName('input-button'))
console.log(inputButton)
inputButton.forEach(element => {
element.style.height='48px'
element.style.width='48px'
element.style.fontSize='15px'
    
});

}       

} 
    
