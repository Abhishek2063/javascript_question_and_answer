//  Professional Level

/**
 * Finds the longest word in a given sentence.
 * @param {string} sentence - The input sentence.
 * @returns {string} The longest word in the sentence.
 */
const findLongestWord = (sentence) => {
  return sentence.split(' ').reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: 'jumped'
