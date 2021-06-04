// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, i) => {
      return char === str[str.length - i - 1]
  })
}

module.exports = palindrome;



// solution 1

// function palindrome(str) {
//     const reversed = str.split("").reverse().join("");
  
//     return str === reversed;
//   }

// solution 2
// create an empty string called 'reversed'
// for each character in the provided string
// take the character and add it to the start of 'reversed'
// return the variable 'reversed'

// function palindrome(str) {
//     let reversed = '';
//     for (let character of str ) {
//     reversed = character + reversed;
// }
  
//     return str === reversed;
//   }
