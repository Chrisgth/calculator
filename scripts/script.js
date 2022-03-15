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