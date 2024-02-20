// Function to merge two sorted arrays (beginner level)
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2]; // Concatenate arrays
  return mergedArray.sort((a, b) => a - b); // Sort the merged array
}

// Example usage
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
