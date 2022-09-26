// Assignment Code
var generateBtn = document.querySelector("#generate");

function RandomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1-rand)+rand*max)

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)]
}

function generaPassword() {
  var userInput = window.prompt("how long you set your password?")

  var passwordlength = parseInt(userInput)

  if (isNaN(passwordlength)) {
    window.alert("that's not a number!")
    return
  }

  if (passwordlength < 8 || passwordlength > 128) {
    window.alert("password length must be between 8-128 characters!")
    return
  }

  var userwantsNumbers = window.confirm("would you like to include numbers in your password? ")
  var userwantsSymbols = window.confirm("would you like to include symbols in your password? ")
  var userwantsLowercase = window.confirm("would you like to include Lowercase in your password? ")
  var userwantsUppercase = window.confirm("would you like to include Uppercase in your password? ")


  var numberList = ["0"]
  var symbolList = ["!"]
  var lowercaseList = [""]
  var uppercaseList = [""]

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userwantsNumbers === true) {
    optionsCart.push(numberList)
  }

  if (userwantsSymbols === true) {
    optionsCart.push(SymbolList)
  }

  if (userwantsLowercase === true) {
    optionsCart.push(LowercaseList)
  }

  if (userwantsUppercase === true) {
    optionsCart.push(UppercaseList)
  }

  var generatedPassword =""

  for (var i = 0; i < passwordlength; i++) {
    var randomlist = getRandomItem(optionsCart)
    var randomchar = getRandomItem(randomlist)
    console.log(randomchar)
  }
}

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);}
