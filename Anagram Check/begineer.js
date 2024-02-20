

// Function to check if two strings are anagrams (beginner level)
function areAnagrams(str1, str2) {
  // Remove whitespace and convert to lowercase
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();

  // Sort the characters and compare the sorted strings
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Example usage
console.log(areAnagrams('listen', 'silent')); // Output: true