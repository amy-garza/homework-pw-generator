// Declare and assign variables
let passwordLength = 8;
let characterList = [];

// Declare and initialize array(s) to store password characters and types
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let specialCharacters = ['!','#','$','%','&','*','?','@','.','_']; 
let numerics = ['0','1','2','3','4','5','6','7','8','9'];

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input; If user input is valid - true or false, initiate prompt;
function writePassword() {
  let validPrompts = getPrompts();
  let passwordText = document.querySelector("#password");

  if (validPrompts) {
      let randomPassword = generatePassword();
      passwordText.value = randomPassword;
  } else {
      passwordText.value = "";
  }

  }

function generatePassword() {
  let password = "";
// for loop set to the number of characters user input
  for(let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * characterList.length);
    password = password + characterList[randomIndex];
  }
  return password;
}


// Create prompt box to generatePassword following prompts
function getPrompts(){
  characterList = [];

  passwordLength = parseInt(prompt("From 8 up to 128, enter the number of characters your password will contain."));

// Stop running for Not A Number entry or not within criteria length range

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Error: Please enter a numeral from 8 to 128.");
      return false;
  }

// Creates prompt for true or valid "OK"
  if(confirm("OK to include lowercase letters in your password?")) {
    characterList = characterList.concat(lowerCase);
  }
  if(confirm("OK to include UPPERCASE letters in your password?")) {
    characterList = characterList.concat(upperCase);
  }
  if(confirm("OK to include special characters in your password?")) {
    characterList = characterList.concat(specialCharacters);
  }
  if(confirm("OK to include numbers in your password?")) {
    characterList = characterList.concat(numerics);
  }
  return true;
}