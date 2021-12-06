var x = 10;
function Sub_numbers_1() {
    document.write(30 - x + "<br>"); //Uses universal var x
}
function Sub_numbers_2() {
    document.write(20 - x + "<br>"); //Uses universal var x
}
Sub_numbers_1();
Sub_numbers_2();

function Add_1() {
    var y = 20;                     //y is a local variable
    document.write(5 + y + "<br>");
}
function Add_2() {
    console.log(y = 6);
    document.write(y + 3); //error fixed in console.log()
}
Add_1();
Add_2();

function get_Date() {
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function if_statement() {
    if (new Date().getHours() <12) {
    document.getElementById("Mine").innerHTML = "Good Morning!";
    }
}

// Age else function

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("input_age").innerHTML = Vote;
}

// Else if function

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}