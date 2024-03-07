/**
 * Solution
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must be unique and you may return the result in any order.
 */
 
function solution(nums1, nums2) {
    const map = {}
    const result = [];

    for (let i = 0; i < nums1.length; i++) {
        const num = nums1[i];
        map[num] = num in map ? map[num] + 1 : 1;
    }

    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i];
        if(num in map && map[num] > 0) {
            result.push(num);
            map[num]--;
        }
    }

    return result;
}

/**
 * Alternative Solution Appreciation
 */
function alternativeSolution(nums1, nums2) {
    return nums1.reduce((accu, curr) => {
        if(nums2.includes(curr)){
            accu.push(curr);
            nums2.splice(nums2.indexOf(curr), 1)
        }

        return accu;
    }, [])
}

/**
 * Test Cases
 */

const nums1 = [1,2,2,1], nums2 = [2,2]; // expected: [2,2]
// const nums1 = [4,9,5], nums2 = [9,4,9,8,4]; // expected: [9,4]

const output = solution(nums1, nums2);
console.log(output)