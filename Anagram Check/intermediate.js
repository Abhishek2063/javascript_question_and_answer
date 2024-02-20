// Function to check if two strings are anagrams (intermediate level)
function areAnagrams(str1, str2) {
  const charCount1 = {};
  const charCount2 = {};

  // Count characters in str1
  for (let char of str1.replace(/\s/g, "").toLowerCase()) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  // Count characters in str2
  for (let char of str2.replace(/\s/g, "").toLowerCase()) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Check if both objects have the same keys and values
  if (Object.keys(charCount1).length !== Object.keys(charCount2).length) {
    return false;
  }

  for (let key in charCount1) {
    if (charCount1[key] !== charCount2[key]) {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(areAnagrams("listen", "silent")); // Output: true
