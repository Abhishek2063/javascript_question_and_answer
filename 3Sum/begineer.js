// beginner level

function threeSumBeginner(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
      if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
          for (let j = i + 1; j < n - 1; j++) {
              for (let k = j + 1; k < n; k++) {
                  if (nums[i] + nums[j] + nums[k] === 0) {
                      result.push([nums[i], nums[j], nums[k]]);
                  }
              }
          }
      }
  }

  return result;
}

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSumBeginner(nums));