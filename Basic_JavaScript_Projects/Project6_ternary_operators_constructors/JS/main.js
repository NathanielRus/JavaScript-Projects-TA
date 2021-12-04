function vote_function() { // function to enter in your age determines if it is under 18 or 18 and above
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You cannot":"You can"; // 2 different options depending on the value entered
    document.getElementById("Vote").innerHTML = Can_vote + " Vote!";
}

function vote(name, age, candidate) { // Constructors function it has 3 properies
    this.vote_name = name;
    this.vote_age = age;
    this.vote_candidate = candidate;
}
var Emma = new vote("Emma", 26, "Washington"); // Values entered in the above terms
var Jack = new vote("Jack", 34, "Lincoln");
var Lee = new vote("Lee", 21, "Lincoln");
function new_vote_F() {
    document.getElementById("New_and_This").innerHTML = Jack.vote_name + " is " + Jack.vote_age + " years old. Jack voted for " + Jack.vote_candidate + "!";
}

// Nested Function

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 0;
        function Plus_three() {Starting_point += 4;} //adds 4 to the Starting_point value
        Plus_three();
        return Starting_point;
    }
}