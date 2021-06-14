export const title = "020. Valid Parentheses";
export const Q = `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([)]"
Output: false

Example 5:

Input: s = "{[]}"
Output: true

`;

export const answer = `
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
