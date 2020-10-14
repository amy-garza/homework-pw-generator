// Declare and assign variables

let passwordLength = 12;
let characterList = [];

// Declare and initialize string / array(s) to store password characters and types

let specialCharacters = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ " ; 
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let numeric = ['0','1','2','3','4','5','6','7','8','9'];



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