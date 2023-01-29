//Input variables

var passLength;
var confirmNumber;
var confirmLowercases;
var confirmUppercases;
var confirmCharacters;

//Special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//User Choices variable
var choices;

// Password generate function
function generatePassword() {
    passLength = parseInt(prompt("How many charaters would you like for your password? Choose between 8 and 128"))
    if (!passLength){
        alert("This needs a numeric value!");
    }
    else if (passLength < 8 || passLength > 128){
        passLength = parseInt(prompt("You must choose between 8 and 128"));
    }
    else {
        confirmNumber = confirm("Would you like your password to contain numbers? Click OK to confirm!");
        confirmCharacters = confirm("Would you like your password to contain special characters? Click OK to confirm!");
        confirmLowercases = confirm("Would you like your password to contain lower cases? Click OK to confirm!");
        confirmUppercases = confirm("Would you like your password to contain upper cases? Click OK to confirm!");
    };
    
    if (!confirmNumber && !confirmCharacters && !confirmLowercases && !confirmUppercases){
        alert("You must choose at least one criteria!");
    } 
    else if (confirmCharacters && confirmNumber && confirmUppercases && confirmLowercases) {

        choices = character.concat(number, lowerCases, upperCases);
    }
    // Else if for 3 positive choices
    else if (confirmCharacters && confirmNumber && confirmUppercases) {
        choices = character.concat(number, upperCases);
    }
    else if (confirmCharacters && confirmNumber && confirmLowercases) {
        choices = character.concat(number, lowerCases);
    }
    else if (confirmCharacters && confirmLowercases && confirmUppercases) {
        choices = character.concat(lowerCases, upperCases);
    }
    else if (confirmNumber && confirmLowercases && confirmUppercases) {
        choices = number.concat(lowerCases, upperCases);
    }
    // Else if for 2 positive choices 
    else if (confirmCharacters && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacters && confirmLowercases) {
        choices = character.concat(lowerCases);

    } else if (confirmCharacters && confirmUppercases) {
        choices = character.concat(upperCases);
    }
    else if (confirmLowercases && confirmNumber) {
        choices = lowerCases.concat(number);

    } else if (confirmLowercases && confirmUppercases) {
        choices = lowerCases.concat(upperCases);

    } else if (confirmNumber && confirmUppercases) {
        choices = number.concat(upperCases);
    }
    // Else if for 1 positive choice
    else if (confirmCharacters) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercases) {
        choices = lowerCases;
    }
    
    else if (confirmUppercases) {
        choices = upperCases;
    };
    // password variable array
    var password = []

    // Random selection for all variables: 
    for (var i = 0; i < passLength; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var p = password.join("");
    UserInput(p);
    return p;
}
// the password into the textbox
function UserInput(p) {
    document.getElementById("password").textContent = p;
}

// Copy Password to Clipboard
function copyText() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  }
