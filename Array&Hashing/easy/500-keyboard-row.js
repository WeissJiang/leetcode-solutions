/**
 * Solution
 */
 
function solution(words) {
    const firstRow = `qwertyuiop`;
    const secondRow = `asdfghjkl`;
    const thirdRow = `zxcvbnm`;
    
    return words.filter(word => {
        const lowerWordArr = word.toLowerCase().split('');
        return lowerWordArr.every(char => firstRow.includes(char)) 
                || lowerWordArr.every(char => secondRow.includes(char)) 
                || lowerWordArr.every(char => thirdRow.includes(char)) 
    })
}


/**
 * Test Cases
 */

// const words = ["Hello","Alaska","Dad","Peace"]; // expected: ["Alaska","Dad"]
// const words = ["omk"]; // expected: []
// const input; // expected: 

const output = solution(words);
console.log(output)