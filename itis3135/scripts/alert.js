alert("Hey my script is running");

function greetByName()
{
    let name = prompt("Hello, what is your name?");
    let how = prompt("How are you doing?");
    var today = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var d =weekday[today.getDay()];
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear(); 
    alert("Today is " + d + " " + month + "/" + date + "/" + year + ", and the time is: " + h + ":" + m + ":" + s +" .The Kind Sphinx Company welcomes you, " + name + "!" +
    " We know you are doing " + how + ".");
}

function add(){
    let number1 = parseFloat(prompt("Enter the first number to add:"));
    let number2 = parseFloat(prompt("Enter the second number to add:"));
    let answer = number1 + number2;
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

function convertInchToCm(){
    let inch = parseFloat(prompt("Enter the length in Inch:"));
    let cm = inch * 2.54;
    alert("Length Converted to cm: " + cm);

}

function reverseWord(){
    let word = prompt("Enter the word to reverse:");
    alert("The reversed version: " + word.split("").reverse().join(""));
}
