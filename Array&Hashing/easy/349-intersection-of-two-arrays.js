/**
 * Solution
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must be unique and you may return the result in any order.
 */
 
function solution(nums1, nums2) {
    const set = new Set(nums1);
    const result = [];

    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        if(set.has(num) && !result.includes(num)) {
            result.push(num);
        }
    }

    return result;
}


/**
 * Test Cases
 */

// const nums1 = [1,2,2,1], nums2 = [2,2]; // expected: [2]
const nums1 = [4,9,5], nums2 = [9,4,9,8,4]; // expected: [9,4]

const output = solution(nums1, nums2);
console.log(output)