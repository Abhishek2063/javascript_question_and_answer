function productExceptSelf(nums) {
  const n = nums.length;
  const leftProducts = new Array(n).fill(1);
  const rightProducts = new Array(n).fill(1);
  const output = [];
  
  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }
  
  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }
  
  for (let i = 0; i < n; i++) {
    output[i] = leftProducts[i] * rightProducts[i];
  }
  
  return output;
}

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
