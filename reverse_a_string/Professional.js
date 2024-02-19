const reverseString = (str) =>
  [...str].reduce((reversed, char) => char + reversed, "");
console.log(reverseString("hello")); // Output: 'olleh'
