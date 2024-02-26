// Beginner Level

function rotateArray(nums, k) {
  for (let i = 0; i < k; i++) {
    const last = nums.pop();
    nums.unshift(last);
  }
  return nums;
}
// Example usage:
console.log(rotateArray([1, 2, 3, 4, 5], 3)); // Output: [3, 4, 5, 1, 2]
