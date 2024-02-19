// beginner level
// A palindrome is a word, phrase, number, or other sequence of
//  characters that reads the same forward and backward,
//  ignoring spaces, punctuation, and capitalization. 
// Examples of palindromes include "radar", "level", 
// "A man, a plan, a canal, Panama", and "12321". 
// Palindromes are interesting from a linguistic and
//  mathematical perspective and are often used as puzzles 
// or in recreational activities.

function isPalindrome(str){
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome('madam')); // Output: true
console.log(isPalindrome('radar')); // Output: true
console.log(isPalindrome('level')); // Output: true
console.log(isPalindrome('madam12')); // Output: false
console.log(isPalindrome('A man, a plan, a canal, Panama')); // Output: false

