// Function to check if two strings are anagrams (professional level)
function areAnagrams(str1, str2) {
  // Utility function to normalize string
  const normalizeString = (str) => str.replace(/\s/g, "").toLowerCase();

  // Normalize both strings
  const normalizedStr1 = normalizeString(str1);
  const normalizedStr2 = normalizeString(str2);

  // If lengths are different, they can't be anagrams
  if (normalizedStr1.length !== normalizedStr2.length) {
    return false;
  }

  // Sort normalized strings and compare
  const sortedStr1 = normalizedStr1.split("").sort().join("");
  const sortedStr2 = normalizedStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

// Example usage
console.log(areAnagrams("listen", "silent")); // Output: true
