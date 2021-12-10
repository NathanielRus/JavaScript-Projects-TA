function Game_Function() {
    var Game_Output;
    var Games = document.getElementById("Game_Input").value;
    var Game_String = " is a great Game!";
    switch(Games) {
        case "C&C":
            Game_Output = "C&C" + Game_String;
        break;
        case "CoD":
            Game_Output = "CoD" + Game_String;
        break;
        case "Cyberpunk 2077":
            Game_Output = "Cyberpunk 2077" + Game_String;
        break;
        case "Starcraft":
            Game_Output = "Starcraft" + Game_String;
        break;
        case "Factorio":
            Game_Output = "Factorio" + Game_String;
        break;
        case "Warhammer":
            Game_Output = "Warhammer" + Game_String;
        break;
        default:
            Game_Output = "Please enter a game exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Game_Output;
}

//getElementByName
function Name_Function() {
    var N = document.getElementsByClassName("Click");
    N[0].innerHTML = "The text has changed!";
}

//Canvas
var c = document.getElementById("Pic");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(150, 50, 25, 110, 500, 480);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 480, 480);
