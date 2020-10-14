// Declare and assign variables

let passwordLength = 12;
let selectionArray = [];

// Declare array(s) to store password characters and types

let specialCharacters = [];
let lowerCase = [];
let upperCase = [];
let numeric = [];




// Assignment Code

let generateBtn = document.querySelector("#generate");

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Define function 

function generatePassword () {

}