'use strict';

const assert = require('chai').assert;
const getPrime = require('../main/primer.js');


describe("Getting prime numbers", function() {
    it("should return 2, 3, 5 as prime numbers in range 0 to 5", function() {
        assert.deepEqual(getPrime.getPrimes(5), [2, 3, 5]);
    })
    it("should return 2, 3, 5, 7 as prime numbers in range 0 to 7", function() {
        assert.deepEqual(getPrime.getPrimes(7), ([2, 3, 5, 7]));
    })
})