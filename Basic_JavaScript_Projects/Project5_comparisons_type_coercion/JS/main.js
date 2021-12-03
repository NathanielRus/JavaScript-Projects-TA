document.write(typeof "string" + 5); //Indicates what type of information

function testt() {
    document.getElementById("test").innerHTML = isNaN('is this not a number'); // function is tue because not a number
}

function testf(){
    document.getElementById("test2").innerHTML = isNaN('45'); // function is false because it is a number
}

function my_function(){
    document.getElementById("test3").innerHTML = 0/0; // NaN due to not being able to divide
}

document.write(5E310); //infinite

document.write(-34E357); // negative infinity

document.write(10 > 5); // true

document.write(6 < 4); // false

console.log(2+2); // will display the result in the console of the browser

console.log(10<5); // will display false in the console

document.write(10 == 10); // true

document.write(3 == 10); // false

x=10;
y=10;
document.write(x===y); // true

a=10;
b=23;
document.write(a===b); // false

c=23;
d="Matt";
document.write(c===d); // false

w=10;
y="ten";
document.write(w===y); // false

document.write(5>3 && 3<8); // true

document.write(5>3 && 4>10); // false

document.write(5>3 || 5<3); // true

document.write(5>10 || 4<2); // false

function notf() {
    document.getElementById("test4").innerHTML = !(10>5); // false becasue not operator is checking if 10 is less than 5
}

function nott() {
    document.getElementById("test5").innerHTML = !(3>10); // true because of double negative
}