// 20. Valid Parentheses
// Easy

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

 

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

 

// Constraints:

//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.


var isValid = function(s) {
    let stack = []
    let keys = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    for(let i = 0 ; i < s.length; i++){
        if(keys[s[i]] === undefined){
            stack.push(s[i])
        }else if(keys[s[i]] !== stack.pop()){
            return false
        }
    }
    return stack[0] === undefined
}