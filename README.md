# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nelsonk94/lotide`

**Require it:**

`const _ = require('@nelsonk94/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: gives the first value in an array
* `middle`: gives the midpoint of an array, 2 points if the array length is even.
* `tail`: gives every value of an array except the first one.
* `assertArraysEqual`: checks if two arrays have the same sequence of contents.
* `assertEqual`: checks if two strings are equal.
* `assertObjectsEqual`: checks if two objects have the same contents.
* `countLetters`: counts the number of letters in a string.
* `countOnly`: counts only the instances where the contents of an array match the input.
* `eqArrays`: gives a boolean when checking if two arrays are equal to each other.
* `eqObjects`: gives a boolean when checking if two objects are equal to each other.
* `findKey`: finds the key of an object.
* `findKeyByValue`: finds the key of an object when entering the corresponding value.
* `flatten`: converts nested arrays into a single array.
* `letterPositions`: gives the index of a letter in a string.
* `map`: modifies each value of an array.
* `takeUntil`: returns all values in an array until the value of the array equals the input vale.
* `without`: removes the input value from the array. 
;