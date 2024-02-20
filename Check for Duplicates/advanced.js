const containsDuplicate = (nums) => {
  const map = {};
  for (let num of nums) {
    if (map[num]) {
      return true;
    }
    map[num] = true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 2, 3, 4, 1])); // Output: true
