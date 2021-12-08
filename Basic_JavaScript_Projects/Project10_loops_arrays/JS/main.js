//While Loop
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

let text = "Hello World!";
let length = text.length;
document.getElementById("length").innerHTML = length;

//For Loop
var Games = ["HLL", "CoD", "C&C", "WoT", "WoS"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Games.length; Y++) {
        Content += Games[Y] + "<br>";
    }
    document.getElementById("List_of_Games").innerHTML = Content;
}

//Array
function doggo_pics() {
    var dog_picture = [];
    dog_picture[0] = "sleeping";
    dog_picture[1] = "playing";
    dog_picture[2] = "eating";
    dog_picture[3] = "Woofing";
    document.getElementById("Dog").innerHTML = "In this picture, the doggo is " + dog_picture[3] + ".";
}

//Constant Function
function constant_function() {
    const Game = {type:"C&C", developer:"Westwood", genre:"RTS"};
    Game.developer = "EA";
    Game.price = "$60";
    document.getElementById("Constant").innerHTML = "The cost of " + Game.type + " was " + Game.price;
}

//Universal var / Local var
var Z = 32;
document.write(Z);
{
    let Z = 45;
    document.write("<br>" + Z);
}
document.write("<br>" + Z);

function returnF() {
    return Math.PI;
}
document.getElementById("return").innerHTML = returnF();

//Objects
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color:"red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById("Car_Object").innerHTML = car.description();

//Breaks
let font ="";
for (let i = 0; i < 6; i++) {
    if (i === 3) {break; }          //Will stop at 3
    font += "The number is " + i + "<br>";
}
document.getElementById("Breako").innerHTML = font;

//Continues
let words = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }      //Will skip 3
    words += "The number is " + i + "<br>";
}
document.getElementById("Continues").innerHTML = words;