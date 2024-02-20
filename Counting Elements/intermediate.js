function countElements(nums) {
  let count = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums.slice(i + 1).every((num) => nums[i] < num)) {
      count++;
    }
  }
  return count;
}

console.log(countElements([3, 1, 4, 1, 5, 9, 2, 6])); // Output: 4
