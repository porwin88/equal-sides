# Algorithm challenge // Equal Sides

- [1. Getting started](#1-getting-started)
- [2. Challenge](#2-challenge)
  - [2.1. Examples](#21-examples)
  - [2.2. Testing your solution](#22-testing-your-solution)
- [3. Submitting your solution](#23-submitting-your-solution)

## 1. Getting started
`https://github.com/andrelellis/equal-sides.git`

Fork this repo and `git clone` your forked repo to your computer, then, run `npm install`. Once happy with your solution, `git push` and submit a pull request at `https://github.com/andrelellis/equal-sides.git`.

## 2. Challenge
Write a function called findIndex that, given an array of integers, finds the first index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

If there is no index that satisfies this condition return -1.

### 2.1. Examples

findIndex([1,2,3,4,3,2,1]) // should return 3

findIndex([-1,2,-5,3]) // should return 0

findIndex([0,10,-8,2]) // should return -1

### 2.2. Testing your solution
To test your solution, run `npm test` in the root directory to run the automated tests.

## 3. Submitting your solution

If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo.
