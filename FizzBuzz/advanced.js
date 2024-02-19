// Advanced Level

for (let i = 1; i <= 100; i++) {
  const fizz = i % 3 === 0;
  const buzz = i % 5 === 0;

  console.log(fizz && buzz ? "FizzBuzz" : fizz ? "Fizz" : buzz ? "Buzz" : i);
}
