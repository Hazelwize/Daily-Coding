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

// initial answer:
// var isValid = function(s) {
//     //Take the string and account for open brackets
//     if(s.length % 2 !== 0)return false;
//     for(let i = s.length/2; i >= 0 ; i--){
//         s = s.replace('()', '').replace('{}','').replace('[]','');
//     }
//     return s.length === 0;
//     //Bracket must be closed in its scope
// };


// refactored:

var isValid = function(s) {
    let stack = []
    const characters = {')': '(', '}' : '{', ']' : '['}
    for(let char of s){
        if(!characters[char]){
            stack.push(char)
        }else if(stack.pop() !== characters[char]){
            return false
        }
    }
    return stack.length === 0
}