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
     it("should return 2, 3, 5, 7 as prime numbers in range 0 to 7", function() {
        assert.deepEqual(getPrime.getPrimes(9), ([2, 3, 5, 7]));
    })
    it("should return 2, 3, 5, 7 as prime numbers in range 0 to 7", function() {
        assert.deepEqual(getPrime.getPrimes(20), ([2, 3, 5, 7, 11, 13, 17, 19]));
    })
    it("should return 2, 3, 5, 7 as prime numbers in range 0 to 7", function() {
        assert.deepEqual(getPrime.getPrimes(25), ([2, 3, 5, 7, 11, 13, 17, 19, 23]));
    })
    it("should return 2, 3, 5, 7 as prime numbers in range 0 to 7", function() {
        assert.deepEqual(getPrime.getPrimes(30), ([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]));
    })
    it("should return 2, 3, 5, 7 as prime numbers in range 0 to 7", function() {
        assert.deepEqual(getPrime.getPrimes(35), ([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]));
    })
    it("should return 2, 3, 5, 7 as prime numbers in range 0 to 7", function() {
        assert.deepEqual(getPrime.getPrimes(40), ([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]));
    })
    it("should return 2, 3, 5, 7 as prime numbers in range 0 to 7", function() {
        assert.deepEqual(getPrime.getPrimes(45), ([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43]));
    })
    it("should return 2, 3, 5, 7 as prime numbers in range 0 to 7", function() {
        assert.deepEqual(getPrime.getPrimes(50), ([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]));
    })
    it("should return undefined for inputs less than or equal to 1", function() {
        assert.deepEqual(getPrime.getPrimes(-5), "undefined");
    })
    it("should return undefined for inputs that are not numbers", function() {
        assert.deepEqual(getPrime.getPrimes("hello"), "undefined");
    })
})
