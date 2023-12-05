/* complex_code.js */

// This code performs complex mathematical calculations using various algorithms.

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function to calculate Fibonacci series
function fibonacciSeries(n) {
  if (n <= 1) {
    return [0, 1];
  } else {
    var fib = fibonacciSeries(n - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib;
  }
}

// Function to calculate prime numbers using Sieve of Eratosthenes algorithm
function sieveOfEratosthenes(n) {
  var primes = [];
  var numArray = [];
  for (var i = 2; i <= n; i++) {
    numArray[i] = true;
  }
  for (var p = 2; p * p <= n; p++) {
    if (numArray[p]) {
      for (var i = p * p; i <= n; i += p) {
        numArray[i] = false;
      }
    }
  }
  for (var i = 2; i <= n; i++) {
    if (numArray[i]) {
      primes.push(i);
    }
  }
  return primes;
}

// Function to calculate GCD (Greatest Common Divisor) of two numbers
function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

// Function to calculate the power of a number
function power(a, b) {
  if (b === 0) {
    return 1;
  } else if (b % 2 === 0) {
    var temp = power(a, b / 2);
    return temp * temp;
  } else {
    var temp = power(a, Math.floor(b / 2));
    return a * temp * temp;
  }
}

// Function to calculate area and circumference of a circle
function circleCalculations(radius) {
  var area = Math.PI * power(radius, 2);
  var circumference = 2 * Math.PI * radius;
  return [area, circumference];
}

// Example usage of the functions
console.log("Factorial of 5: " + factorial(5));
console.log("Fibonacci series till 10: " + fibonacciSeries(10));
console.log("Prime numbers till 20: " + sieveOfEratosthenes(20));
console.log("GCD of 54 and 24: " + gcd(54, 24));
console.log("2^8: " + power(2, 8));
console.log("Area and Circumference of circle with radius 5: " + circleCalculations(5));

// More complex calculations can be performed using these functions.
// Feel free to explore and extend this code as desired.