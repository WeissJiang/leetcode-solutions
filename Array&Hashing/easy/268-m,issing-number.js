/**
 * Solution
 * Given an array nums containing n distinct numbers in the range [0, n], 
 * return the only number in the range that is missing from the array.
 * 
 * distinct, disordered, and starts from 0
 */
 
function solution(nums) {
    let n = nums.length;
    let dic = new Array(n + 1).fill(-1);

    for (let i = 0; i < nums.length; i++) {
        dic[nums[i]] = 1;
    }

    for (let i = 0; i < dic.length; i++) {
        if(dic[i] == -1) return i;        
    }

    return 0;
}


/**
 * Top Level Solution Appreciation
 */
const topSolution = (nums) => (nums.length * (nums.length + 1) / 2) - nums.reduce((acc, curr) => acc + curr, 0);

function topSolution(nums){
    const currSum = nums.reduce((acc, curr) => acc + curr, 0);
    const expectedSum = nums.length * (nums.length + 1) / 2;

    return expectedSum - currSum
}


/**
 * Test Cases
 */

// const nums = [3,0,1]; // expected: 2
// const nums = [0,1]; // expected: 2
const nums = [9,6,4,2,3,5,7,0,1]; // expected: 8
// const nums = [1,2,3]; // expected: 0

const output = solution(nums);
console.log(output)