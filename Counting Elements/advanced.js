const countElements = (nums) => {
  let count = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums.every((num, index) => index <= i || nums[i] < num)) {
      count++;
    }
  }
  return count;
};

console.log(countElements([3, 1, 4, 1, 5, 9, 2, 6])); // Output: 4
