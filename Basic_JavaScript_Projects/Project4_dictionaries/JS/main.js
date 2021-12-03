function my_dictionary() { // Dictionary with multiple KVPs
    var Animal = {
        Species:"Doggo",
        Color:"Black",
        Bread:"Labrador",
        Age:4,
        Sound:"Woof!"
    };
    delete Animal.Sound // Deletes the KVP Sound
    document.getElementById("Dictionary").innerHTML = Animal.Sound; // Returns the KVP Animal:Sound
}
