/**
 * Solution
 */

function solution(nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const complement = target - element;
        
        if(!map.has(complement)) map.set(element, i);
        else return [i, map.get(complement)]
    }

    return [];
};



/**
 * Test Cases
 */

// const nums = [2,7,11,15], target = 9;
// const nums = [3,2,4], target = 6;
const nums = [3,3], target = 6;

const output = solution(nums, target);
console.log(output)