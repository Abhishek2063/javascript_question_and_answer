//  Professional Level

/**
 * Prints numbers from 1 to 100, replacing multiples of 3 with "Fizz",
 * multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".
 */
const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;

    console.log(fizz && buzz ? "FizzBuzz" : fizz ? "Fizz" : buzz ? "Buzz" : i);
  }
}

// Example usage
fizzBuzz();