//  Professional Level

/**
 * Returns indices of the two numbers in an array that add up to a specific target.
 * @param {number[]} nums - The input array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} Indices of the two numbers such that they add up to the target.
 */
const twoSum = (nums, target) => {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]