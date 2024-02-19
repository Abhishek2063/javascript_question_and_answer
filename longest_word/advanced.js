// Advanced Level

const findLongestWord = (sentence) => {
  return sentence.split(' ').reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: 'jumped'
