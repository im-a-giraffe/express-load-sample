const express = require("express");

const iterations = 5000;
const multiplier = 1000000000;

function calculatePrimes(iterations, multiplier) {
  var primes = [];
  for (var i = 0; i < iterations; i++) {
    var candidate = i * (multiplier * Math.random());
    var isPrime = true;
    for (var c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
          // not prime
          isPrime = false;
          break;
       }
    }
    if (isPrime) {
      primes.push(candidate);
    }
  }
  return primes;
}

const app = express();

app.get("*", (req, res) => {
    const result = calculatePrimes(iterations, multiplier);
    res.status(200).json(result);
});

app.listen(4000, () => {
    console.log("Server running.");
})