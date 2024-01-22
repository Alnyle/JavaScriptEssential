const OperationBtn = document.getElementById('Op');
const resultHTML = document.getElementById('result');

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

function PerformOperation() {

    let num1 = input1.value;
    let num2 = input2.value;

    if(!isNaN(num1) && !isNaN(num2)) {
        let result = multiply(num1, num2);

        displayResult(result);
    }
    else {
        displayResult('Please enter a valid input');
    }
}


function multiply(a, b) {
    // a debugger statement to pause execution
    debugger;

    return a * b;
}


function displayResult(result) {
    resultHTML.textContent = `The result is: ${result}`;
}

OperationBtn.addEventListener('click', PerformOperation);