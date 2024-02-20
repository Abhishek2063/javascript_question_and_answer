//  Professional Level

/**
 * Determines if the input string containing parentheses, curly braces, and square brackets is valid.
 * @param {string} s - The input string.
 * @returns {boolean} True if the input string is valid, false otherwise.
 */
const isValid = (s) => {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let char of s) {
    if (char in map) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (map[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true