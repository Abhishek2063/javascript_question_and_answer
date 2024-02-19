// Intermediate level
const reverseString = (str) => {
  console.log(str.split("")); // Output: [ 'h', 'e', 'l', 'l', 'o' ]
  console.log(str.split("").reverse()); // Output: [ 'o', 'l', 'l', 'e', 'h' ]

  return str.split("").reverse().join("");
};
console.log(reverseString("hello")); // Output: 'olleh'
