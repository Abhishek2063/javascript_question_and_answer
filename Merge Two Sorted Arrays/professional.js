// Function to merge two sorted arrays (professional level)
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i++]);
    } else {
      mergedArray.push(arr2[j++]);
    }
  }

  return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Example usage
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
