// Beginner Level

function maxArea(height) {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const minHeight = Math.min(height[i], height[j]);
      const area = minHeight * (j - i);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}

// Example usage:
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49