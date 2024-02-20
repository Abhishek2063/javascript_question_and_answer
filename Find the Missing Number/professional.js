// Function to find the missing number (professional level)
const findMissingNumber = (nums) => {
  const n = nums.length; // Since one number is missing
  const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
  const actualSum = nums.reduce((acc, num) => acc + num, 0);
  return expectedSum - actualSum;
};

// Example usage
console.log(findMissingNumber([3, 0, 1, 4, 6, 2])); // Output: 5
