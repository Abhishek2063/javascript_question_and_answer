// Advanced Level

const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  
  const merged = [];
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      merged.push(prev);
      prev = curr;
    }
  }
  merged.push(prev);
  
  return merged;
}

// Example usage:
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Output: [[1,6],[8,10],[15,18]]
