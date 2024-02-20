// Function to merge two sorted arrays (advanced level)
const mergeSortedArrays = (arr1, arr2) => {
  const mergedArray = [];
  let i = 0, j = 0;

  while (i < arr1.length || j < arr2.length) {
      if (i >= arr1.length || arr1[i] > arr2[j]) {
          mergedArray.push(arr2[j]);
          j++;
      } else {
          mergedArray.push(arr1[i]);
          i++;
      }
  }

  return mergedArray;
}

// Example usage
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
