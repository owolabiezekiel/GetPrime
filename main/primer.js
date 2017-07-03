'use strict';

module.exports = {
    getPrimes: (n) => {
        // create an array to hold the prime numbers if any
        let primes = [];

        // this code handles input that is not a number
        if (typeof(n) != 'number') {
            return "undefined";
        }
        // this code checks if input value is less than or equal to 1. it returns immediately
        else if (n <= 1) {
            return "undefined";
        }
        // if the input value is greater than or equal to 2
        else {
            for (var i = 2; i <= n; i++) {
                //calls the isPrime function on the value of iterator
                if (isPrime(i))
                    primes.push(i);

            }
            return primes;
        }

        // function to check if a value is prime
        function isPrime(num) {
            if (num < 2) return false;
            for (let i = 2; i < num; i++) {
                if (num % i == 0)
                    return false;
            }
            return true;
        }
    }
}