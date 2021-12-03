function addition_F() { // Name of function
    var addition = 9 + 3; // Operation being done
    document.getElementById("Add").innerHTML ="9 + 3 = " + addition; // Assigning Math id with string and addition function
}

function subtraction_F() { // subtraction version of addition function
    var subtraction = 4 - 3;
    document.getElementById("Sub").innerHTML ="4 - 3 = " + subtraction;
}

function multi_F() { // multiplication version of function
    var multiply = 4*9;
    document.getElementById("Multi").innerHTML = "4 x 9 = " + multiply;
}

function divide_F() { // division version of function
    var divide = 10/2;
    document.getElementById("Div").innerHTML = "10 / 2 = " + divide;
}

function more_math() { // simple math function
    var simple_math = (1+2) * 12 / 2 - 3;
    document.getElementById("simpleM").innerHTML = "(1+2)*10/2-3= " + simple_math;
}

function more_math2() { // simple math using modulus operator function
    var simple_math2 = 25 % 6;
    document.getElementById("simpleM2").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math2;
}

function negation() {
    var x = 5;
    document.getElementById("negationx").innerHTML = -x; // add the operator - to make it negative
}

var X = 5;
X++;        // add 1
document.write(X);

var A = 10;
A--;        // subtract 1
document.write(A);

window.alert(Math.random() * 100); // random number between 0 and 100

document.write(Math.SQRT2); // writing the square root of 2