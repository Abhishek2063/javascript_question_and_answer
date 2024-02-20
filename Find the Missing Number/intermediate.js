// Function to find the missing number (intermediate level)
function findMissingNumber(nums) {
  nums.sort((a, b) => a - b); // Sort the array
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i) {
          return i; // If the index doesn't match the value, return the index
      }
  }
  return nums.length; // If no missing number found, return the last index + 1
}

// Example usage
console.log(findMissingNumber([3, 0, 1, 4, 6, 2])); // Output: 5