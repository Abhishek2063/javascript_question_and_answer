// Advanced level
const reverseString = (str) => {
    console.log([...str]); 
    // Output: [ 'h', 'e', 'l', 'l', 'o' ]
    console.log([...str].reverse()); 
    // Output: [ 'o', 'l', 'l', 'e', 'h' ]
  return [...str].reverse().join("");
};
console.log(reverseString('hello')); 
// Output: 'olleh'