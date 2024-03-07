/**
 * Solution
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 */
 
function solution(nums) {
    let map = new Map();

    for(let i = 0; i < nums.length; i ++){
        let origin = nums[i];

        if(map.has(origin)) return true;
        else map.set(origin, i);
    }

    return false;
}


/**
 * Test Cases
 */

// const nums = [1,2,3,1];
// const nums = [1,2,3,4];
// const nums = [1,1,1,3,3,4,3,2,4,2];

const output = solution(nums);
console.log(output)