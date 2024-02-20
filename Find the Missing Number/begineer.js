// Function to find the missing number (beginner level)
function findMissingNumber(nums) {
  const n = nums.length; // Since one number is missing
  const sumOfNNumbers = (n * (n + 1)) / 2; // Sum of first n natural numbers
  const sumOfArray = nums.reduce((acc, num) => acc + num, 0);
  return sumOfNNumbers - sumOfArray;
}

// Example usage
console.log(findMissingNumber([3, 0, 1, 4, 6, 2])); // Output: 5
