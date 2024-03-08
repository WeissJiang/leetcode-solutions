/**
 * Solution
 */
 
function solution(nums1, nums2) {
    const map = {};
    const stack = [];
    nums2.forEach(n => {
        while (stack.length > 0 && stack[stack.length - 1] < n) {
            map[stack.pop()] = n;
        }
        stack.push(n);
    });
    return nums1.map(n => map[n] || -1);
}


/**
 * Test Cases
 */

const nums1 = [4,1,2], nums2 = [1,3,4,2]; // expected: [-1,3,-1]
// const nums1 = [2,4], nums2 = [1,2,3,4]; // expected: [3,-1]
// const input; // expected:

const output = solution(nums1, nums2);
console.log(output)