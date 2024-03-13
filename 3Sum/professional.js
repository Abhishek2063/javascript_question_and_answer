//  Professional Level

function threeSumProfessional(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
      if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
          let left = i + 1,
              right = n - 1,
              target = -nums[i];
          while (left < right) {
              if (nums[left] + nums[right] === target) {
                  result.push([nums[i], nums[left], nums[right]]);
                  while (left < right && nums[left] === nums[left + 1]) left++;
                  while (left < right && nums[right] === nums[right - 1]) right--;
                  left++;
                  right--;
              } else if (nums[left] + nums[right] < target) {
                  left++;
              } else {
                  right--;
              }
          }
      }
  }

  return result;
}

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSumProfessional(nums));