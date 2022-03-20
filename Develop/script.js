// Assignment code here

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "["];

function generatePassword() {
  var password = [];
  var selectedCriteria = [];
  var passwordLength = parseInt(prompt("How long would you like your password to be? Enter a number 8-128."));
  //Validates that the users desired password length is between 8-128.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please ensure the number is between 8 and 128.");
    return generatePassword();
  }
  //Validates that the user has entered only numbers as an answer to above prompt.
  if (isNaN(passwordLength)) {
    alert("Please enter a number.");
    return generatePassword();
  }

  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");
  //Validates that the user has selected at least one character option.
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    window.alert("You must select 'OK' to at least one character type.");
    return generatePassword();
  }
  //Adds chosen character types into new array called selectedCriteria.
  if (includeLowercase) selectedCriteria = selectedCriteria.concat(lowerCase);

  if (includeUppercase) selectedCriteria = selectedCriteria.concat(upperCase);

  if (includeNumbers) selectedCriteria = selectedCriteria.concat(number);

  if (includeSpecial) selectedCriteria = selectedCriteria.concat(special);

  //this loop will choose a random character in the array of possible characters and adds one character in each iteration to a password array until it meets the users desired password length.
  for (var i = 0; i < passwordLength; i++) {
    var randomArrayPosition = Math.floor(Math.random() * selectedCriteria.length);
    var eachCharacter = selectedCriteria[randomArrayPosition];
    password.push(eachCharacter);
  }

  return password.join("");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
