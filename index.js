

function isPalindrome(word) {
  // Write your algorithm here
let wordArr = word.toLowerCase().split("");
let reversedWord = wordArr.reverse().join("");
if(reversedWord === word.toLowerCase()){
  return true
}
return false
}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;