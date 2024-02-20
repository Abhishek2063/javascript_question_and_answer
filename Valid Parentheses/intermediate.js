// Intermediate Level

function isValid(s) {
  const stack = [];
  const openChars = new Set(['(', '{', '[']);
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let char of s) {
    if (openChars.has(char)) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (char !== map[top]) {
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