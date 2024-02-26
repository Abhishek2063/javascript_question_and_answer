// Beginner Level

function productExceptSelf(nums) {
  const n = nums.length;
  const output = [];
  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    output.push(product);
  }
  return output;
}

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
