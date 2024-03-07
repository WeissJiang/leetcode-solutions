/**
 * Solution
 * Given an array nums of n integers where nums[i] is in the range [1, n], 
 * return an array of all the integers in the range [1, n] that do not appear in nums.
 */
 
function solution(nums) {
    let n = nums.length;
    let dic = new Array(n).fill(-1);
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        dic[nums[i] - 1] = 1;
    }

    for (let i = 0; i < dic.length; i++) {
        if(dic[i] == -1) result.push(i + 1);        
    }

    return result;
}


/**
 * Test Cases
 */

const nums = [4,3,2,7,8,2,3,1]; // expected: [5,6]
// const nums = [1,1]; // expected: [2]
// const input; // expected: 

const output = solution(nums);
console.log(output)