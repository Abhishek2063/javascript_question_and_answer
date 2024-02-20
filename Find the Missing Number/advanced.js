// Function to find the missing number (advanced level)
const findMissingNumber = (nums) => {
  let missing = nums.length; // Initialize missing number as the last index
  for (let i = 0; i < nums.length; i++) {
      missing ^= i ^ nums[i]; // XOR operation to find the missing number
  }
  return missing;
}

// Example usage
console.log(findMissingNumber([3, 0, 1, 4, 6, 2])); // Output: 5