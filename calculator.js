const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const operation = document.getElementById('operation');
const button = document.getElementById('calculate');
const resultspace = document.getElementById('result');

function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b; 
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b; 
}

const operations = {
    sum: '+',
    substract: '-',
    multiply: '*',
    divide: '/'
}

function Calculate(a, b, operation) {
    let result;
    switch(operation) {
        case operations.sum:
            result = sum(a, b);
            break;
        case operations.substract:
            result = substract(a, b);
            break;
        case operations.multiply:
            result = multiply(a, b);
            break;
        case operations.divide:
            result = divide(a, b);
            break;
        default: 
            break;
    }
    return result;
}

button.addEventListener('click', function() {
    const a = Number(number1.value);
    const b = Number(number2.value);
    const action = operation.value; 
    const result = Calculate(a, b, action)
    resultspace.innerHTML = result;
});