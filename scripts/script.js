// Your calculator is going to contain functions for all of the basic math operators
// you typically find on simple calculators, 
// so start by creating functions for the following items and testing them in your browser’s console.
// add
// subtract
// multiply
// divide

let sum = 0;
let subtraction = 0;
let multiplication = 0;
let division = 0;

function add(a, b){
    sum = a + b;
    return sum;
}

function subtract(a, b){
    subtraction = a - b;
    return subtraction;
}

function multiply(a, b){
    multiplication = a * b;
    return multiplication;
}

function divide(a, b){
    division = a / b;
    return division;
}

// Create a new function operate that takes an operator and 2 numbers 
// and then calls one of the above functions on the numbers.

// Redo with switch for practice after finished
function operate(operator, a, b){
    if(operator === "+"){
        add(a,b);
        return sum;
    }else if(operator === "-"){
        subtract(a,b);
        return subtraction;
    }else if(operator === "*"){
        multiply(a,b); 
        return multiplication;
    }else if(operator === "/"){
        divide(a,b);
        return division;
    }
}

const clearbtn = document.querySelector('#resetbutton')
const display = document.querySelector('p')
let displayValue = '';
let operatorValue = '';
let numericValueOne = '';
const operatorbtns = document.querySelectorAll('button.operatorbtn')
const numberbtns = document.querySelectorAll('button.numberbtn')
const equalsbtn = document.querySelector('.equalsbtn')

operatorbtns.forEach(element => {
    element.addEventListener('click', (e) => {
        operatorValue = e.target.value;
        if(displayValue !== ''){
            numericValueOne = displayValue;
            displayValue = '';
        } else {
            displayValue = '';
        }
    })
})

numberbtns.forEach(element =>{
    element.addEventListener('click', (e) =>{
        displayValue += e.target.value
        display.textContent = displayValue;
    })
})

clearbtn.addEventListener('click', (e) =>{
    displayValue = '';
    display.textContent = '';
    numericValueOne = '';
    operatorValue = '';
})

equalsbtn.addEventListener('click', () =>{
    numericValueOne = Number(numericValueOne);
    displayValue = Number(displayValue);
    displayValue = operate(operatorValue, numericValueOne, displayValue)
    if(displayValue === undefined){
        displayValue = '';
        display.textContent = displayValue;
    } else {
        display.textContent = displayValue;
    }
})
// Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator,
// and also save which operation has been chosen and then operate() on them when the user presses the “=” key.