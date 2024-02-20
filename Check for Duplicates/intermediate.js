function containsDuplicate(nums) {
  nums.sort();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 2, 3, 4, 1])); // Output: true
