function countElements(nums) {
  let count = 0;
  for (let i = 0; i <= nums.length; i++) {
    let isSmaller = true;
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] >= nums[j]) {
        isSmaller = false;
        break;
      }
    }
    if (isSmaller) {
      count++;
    }
  }
  return count;
}
console.log(countElements([3, 1, 4, 1, 5, 9, 2, 6])); // Output: 4
