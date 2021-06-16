const title = "007. Reverse Integer";
const Q = `Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321

Example 2:

Input: x = -123
Output: -321

Example 3:

Input: x = 120
Output: 21

Example 4:

Input: x = 0
Output: 0
`;

const answer = `
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;
    let negativeFlag = false;
    let count = 0;
    const ten = 10;
    if (x === 0) {
        result = 0;
    } else if (x < 0) {
        negativeFlag = true;
        x *= (-1);
    } 

    console.log(Math.pow(2,31) -1);
    console.log(x);
    console.log(Math.pow(2,31) -1);
    let param = x;
    
    while (param > 9) {
        
        result += (param%ten);
        result *= 10;
        param = Math.floor(param/ten);
        console.log(param, result);
    }
    result += param;
    
    if (negativeFlag) {
        result *= (-1);
    }
        if (result >= Math.pow(2,31)) {
        return 0;
    } else if (result < (-1)*Math.pow(2,31)) {
        return 0;
    }
    return result;
};
`;

export let object = {
  title: title,
  question: Q,
  answer: answer
};
