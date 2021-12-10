function Formv() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("First and Last name must be filled out. Along with your Email");
        return false;
    }
}