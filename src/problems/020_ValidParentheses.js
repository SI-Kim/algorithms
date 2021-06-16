const title = "020. Valid Parentheses";
const Q = `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

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

const answer = `
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let brackets = {'(': ')', '{': '}', '[': ']'};
    const arr = s.split('');
    let stack = [];
    let result = true;
    
    if(!checkOpen(s[0])) {
        result = false;
        return result;
    }
    
    arr.forEach(function(char) {
        // open
        if (checkOpen(char)) {
            stack.push(char);
        // close
        } else {
            const aa = stack.pop();
            
            if (char !== brackets[aa]) {
                result = false;
                return;
            }
        }
       
    });
    
    if (lengCheck(stack)) {
        result = false;
    }
    
      return result;
};


function lengCheck(arr) {
    if (arr.length > 0) {
        return true;
    }
}

function checkOpen(char) {
    if (char === '(' || char === '{' || char === '[') {
        return true
    } else {
        return false;
    }
}

`;

export let object = {
  title: title,
  question: Q,
  answer: answer
};
