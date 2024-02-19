//  Professional Level

/**
 * Calculates the factorial of a given number.
 * @param {number} num - The number to calculate the factorial for.
 * @returns {number} The factorial of the given number.
 */

const factorial = (num) => {
    return num === 0 || num === 1 ? 1 : num * factorial(num - 1);
  }
  
  console.log(factorial(5)); // Output: 120