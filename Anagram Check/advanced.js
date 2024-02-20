// Function to check if two strings are anagrams (advanced level)
function areAnagrams(str1, str2) {
  // Remove whitespace and convert to lowercase
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // If the lengths are different, they can't be anagrams
  if (str1.length !== str2.length) {
      return false;
  }

  const charCount = {};

  // Count characters in str1 and decrement for str2
  for (let char of str1) {
      charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
      if (!charCount[char]) {
          return false; // Character not found or count exhausted
      }
      charCount[char]--;
  }

  return true;
}

// Example usage
console.log(areAnagrams('listen', 'silent')); // Output: true