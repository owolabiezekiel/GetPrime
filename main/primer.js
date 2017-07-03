'use strict';

module.exports = {
    getPrimes: (n) => {
        let primes = [];
        if (typeof(n) != 'number') {
            return "undefined";
        } else if (n <= 1) {
            return "undefined";
        } else {
            for (var i = 2; i <= n; i++) {
                if (isPrime(i))
                    primes.push(i);

            }
            return primes;
        }

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