// Intermediate Level

function rotateArray(nums, k) {
  const n = nums.length;
  k = k % n;
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
  return nums;
}

function reverse(nums, start, end) {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

// Example usage:
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [3, 4, 5, 1, 2]
