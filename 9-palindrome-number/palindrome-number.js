/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let value=x.toString()
let reversedWord = value.split('').reverse().join("");
if (x == reversedWord) {
return (true)
}
  else {return false}
}