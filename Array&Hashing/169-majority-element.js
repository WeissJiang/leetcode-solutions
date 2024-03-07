/**
 * Solution
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 */
 
function solution(nums) {
    let maj = 0;
    let count = 0;
      for (let n of nums) {
        if (count === 0) maj = n;

        count += n === maj ? 1 : -1;
    }
    return maj;
};



/**
 * Test Cases
 */

// const nums = [3,2,3];
// const nums = [2,2,1,1,1,2,2];
// const nums = [3,3,4];

const output = solution(nums);
console.log(output)