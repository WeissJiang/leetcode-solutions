/**
 * Solution
 * Given an integer array nums and an integer k, 
 * return true if there are two distinct indices i and j 
 * in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 */
 
function solution(nums, k) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];

        if(Math.abs(i - map[curr]) <= k){
            return true;
        }
        map[curr] = i;
    }

    return false;
}


/**
 * Test Cases
 */

// const nums = [1,2,3,1], k = 3; // true
// const nums = [1,0,1,1], k = 1;  // true
const nums = [1,2,3,1,2,3], k = 2;  // false

const output = solution(nums, k);
console.log(output)