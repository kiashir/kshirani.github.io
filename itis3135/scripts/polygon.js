// 'Activity #6 - Name the Polygon' 

var userInput = parseFloat(prompt("The Kind Sphinx would like your number (0 - 10) to name the polygon: "));

// This function matches userInput and the name of the polygon
function getShape(userInput){

    if(userInput == 0){
        alert("It's NOT a polygon");
    }else if(userInput == 1){
        alert("It's a henagon OR monogon");
    }else if(userInput== 2) {
        alert("It's a digon OR bigon");
    }else if(userInput == 3) {
        alert("It's a trigon OR triangle");
    }else if(userInput == 4) {
        alert("It's a tetragon OR quadrilateral");
    }else if(userInput == 5) {
        alert("It's a pentagon");
    }else if(userInput == 6) {
        alert("It's a hexagon");
    }else if( userInput== 7) {
        alert("It's a heptagon OR septagon");
    }else if(userInput == 8) {
        alert("It's a octagon");
    }else if( userInput== 9) {
        alert("It's a enneagon OR nonagon");
    }else if(userInput == 10) {
        alert("It's a decagon");
    }

}

// This function validates entered data
function validateEntry(x){
    x = Math.abs(x);// make negative numbers positive with absolute value
    x = Math.round(x);// round to nearest integer
    // If input is not 0-10
    if(x<0 || x>10){
        var y = prompt("Your entry is out of range; Kind Sphinx would like your number (0 - 10) to name the polygon: ");
        return validateEntry(y);// return to check the new entry
    }
    // If input is not a number
    else if(Number.isInteger(x) == false){
        var y = prompt("Your entry is NOT a number; Kind Sphinx would like your number (0 - 10) to name the polygon: ");
        return validateEntry(y);// return to check the new entry
    } else{
        return x;
    }
}

// Call getShape() function and pass the validated input as parameter
getShape(validateEntry(userInput));