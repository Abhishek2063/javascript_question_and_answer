// Advanced Level

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