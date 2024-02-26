//  Professional Level

/**
 * Computes the product of all elements in the array except self.
 * @param {number[]} nums - The input array of integers.
 * @returns {number[]} The product of all elements except self.
 */
const productExceptSelf = (nums) => {
  const n = nums.length;
  const output = new Array(n);
  
  output[0] = 1;
  for (let i = 1; i < n; i++) {
    output[i] = output[i - 1] * nums[i - 1];
  }
  
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  
  return output;
}

// Example usage:
console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
