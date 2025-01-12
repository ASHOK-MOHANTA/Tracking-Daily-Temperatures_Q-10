// function generatePassword(length,includeNumber,includeSpecialCharacters){
// let upperCaseCharacter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let lowerCaseCharacter ="abcdefghijklmnopqrstuvwxyz";
// let specialCharecters = "~@!#$%&'()*+,-./{}~[]";
// let number ="0123456789"
// let password = "";
// let allcharacters = upperCaseCharacter + lowerCaseCharacter;
// password += upperCaseCharacter[Math.floor(Math.random() * upperCaseCharacter.length)];

// if(includeNumber){
//   password += number[Math.floor(Math.random() * number.length)];
// }
// if(includeSpecialCharacters){
//   password += specialCharecters[Math.floor(Math.random() * specialCharecters.length)]
// }

// while(password.length<length){
//   password += allcharacters[Math.floor(Math.random() * allcharacters.length)] 
// }
// return password
// }

// console.log(generatePassword(10,true,true))

//------------------------------------------

let temp =[25,30,31,32,33,34,23.21];
console.log(temp[3]);
temp[3] = temp[3]+2;
console.log(`updated tempeture of day 4 ${temp[3]}`);
for(let i=0; i<temp.length; i++){
  console.log(`tempeture of day ${i+1} ${temp[i]}`);
}