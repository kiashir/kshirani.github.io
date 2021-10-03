function add(){
    let number1 = parseFloat(prompt("Enter the first number to add:"));
    let number2 = parseFloat(prompt("Enter the second number to add:"));
    let answer = number1 + number2;
    alert("The answer is: " + answer)
}

function deduct(){
    let number1 = parseFloat(prompt("Enter the first number to deduct from:"));
    let number2 = parseFloat(prompt("Enter the second number:"));
    let answer = number1 - number2;
    alert("The answer is: " + answer)
}

function divide(){
    let number1 = parseFloat(prompt("Enter the first number:"));
    let number2 = parseFloat(prompt("Enter the second number to divid by:"));
    let answer = number1 / number2;
    alert("The answer is: " + answer)
}

function multiply(){
    let number1 = parseFloat(prompt("Enter the first number to multiply:"));
    let number2 = parseFloat(prompt("Enter the second number to multiply:"));
    let answer = number1 * number2;
    alert("The answer is: " + answer)
}
