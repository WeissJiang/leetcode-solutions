/**
 * Solution
 */
 
function solution(candies) {
    return Math.min(new Set(candies).size, candies.length / 2);
}


/**
 * Test Cases
 */

// const candies = [1,1,2,2,3,3]; // expected: 3
// const candies = [1,1,2,3]; // expected: 2
// const candies = [6,6,6,6]; // expected: 1

const output = solution(candies);
console.log(output)