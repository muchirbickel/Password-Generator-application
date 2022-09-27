// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// generate password setting
function generatePassword() {
  var originalLength = passwordLength();
  var upperLower = getUpperLower();
  var specialCharacter = getSpecialCharacter();

  var length = originalLength - upperLower.length;
  length = length - specialCharacter.length;
  var randomNum = getRandomNum(length);

  var password = upperLower + specialCharacter;
  for (rand of randomNum) {
    password += rand;
  }
  return password.slice(0, originalLength);
}

// get password length
function passwordLength(){
  var passLength;
  var bool = true;
  do {
     passLength = window.prompt("Please choose password length between 8 and 128");
     if(passLength >= 8 || passLength <= 128){
      bool = false;
     }
  } while (bool);
  return passLength;
}

// set uppercase and lowercase character
function getUpperLower() {
  var caseLetter;
  do {
    var bool = false;
    caseLetter = window.prompt("Please enter the uppercase or lowercase character");
    if (!isNaN(caseLetter)) {
      bool = true;
    }
  } while (bool);
  return caseLetter;
}

// set special character
function getSpecialCharacter() {
  var specialChar;
  var characterArray = [ "!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","^","_","`","|","~" ] ;
  do {
    var bool = true;
    specialChar = window.prompt("Please choose special character from {!,#,$,%,&,(,),*,+,-,.,/,:,;,<,=,>,?,@,^,_,`,|,~}");
    for (var i = 0; i < characterArray.length; i++) {
      if (specialChar == characterArray[i]) {
        bool = false;
      }
    }
  } while (bool);
  return specialChar;
}

// set to generate random number
function getRandomNum(max) {
  var randNum = [max];
  for (var i = 0; i < max; i++) {
    randNum[i] = (Math.floor(Math.random() * max));
  }
  return randNum;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);