//  Professional Level

const maxSubarray = (nums) => {
  if (!Array.isArray(nums) || nums.length === 0) {
      throw new Error("Input is not a valid array or is empty.");
  }

  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
      currentSum = Math.max(nums[i], currentSum + nums[i]);
      maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Maximum subarray sum:", maxSubarray(nums));