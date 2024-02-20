function containsDuplicate(nums){
  const numSet = new Set(nums);
  return numSet.size !== nums.length;
}
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 2, 3, 4, 1])); // Output: true
