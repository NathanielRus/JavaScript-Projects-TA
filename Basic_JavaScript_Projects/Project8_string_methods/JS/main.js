// Concatenate function
function Concate() {
    var part_1 = "1st Var: ";
    var part_2 = "2nd Var: ";
    var part_3 = "3rd Var: ";
    var part_4 = "4th Var:";
    var all_Variables = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = all_Variables;
}

// Slice Method
function slice_method() {
    var Sentence="Working hard or hardly working ehhh Johnny?";
    var Section=Sentence.slice(36,43);                              // determines where the slice starts and stops by counting characters
    document.getElementById("Slice").innerHTML=Section;
}

// toUpperCase Method
function upper() {
    let string = "this sentance is not upper case but it will be.";
    let result = string.toUpperCase();
    document.getElementById("upper_case").innerHTML = result;
}

// search() Method
function search() {
    let text = "Mr. Russell has a blue house."
    let position = text.search("Russell");
    document.getElementById("search").innerHTML = position;
}

// Number method
function string_Method() {
    var x = 182;
    document.getElementById("numbs_to_string").innerHTML = x.toString();
}

// toPrecision method
function precision_M() {
    var x = 1548.2345876;
    document.getElementById("Precision").innerHTML = x.toPrecision(5); // determins where to stop counting
}

// toFixed Method
function fixed() {
    let num = 6.245876;
    let n = num.toFixed(2);
    document.getElementById("Fixed").innerHTML = n;
}

// valueOf Method
function value_of() {
    let text = "To be or not to be?";
    let result = text.valueOf();
    document.getElementById("Value").innerHTML = result;
}
