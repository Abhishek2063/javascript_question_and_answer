//  Professional Level

/**
 * Finds the maximum area of water that can be contained by the given array of heights.
 * @param {number[]} height - The array representing the heights of the lines.
 * @returns {number} The maximum area of water that can be contained.
 */
const maxArea = (height) => {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  
  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    const area = minHeight * (right - left);
    maxArea = Math.max(maxArea, area);
    
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return maxArea;
}

// Example usage:
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49