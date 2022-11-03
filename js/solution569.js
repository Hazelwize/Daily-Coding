// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints

// 0 <= input.length <= 100

function validParentheses(parens) {
    let par = {
      ')' : '(',
      '}' : '{',
      ']' : '['
    }
    let stack = []
    for(let i = 0; i < parens.length; i++){
      if(!par[parens[i]]){
        stack.push(parens[i])
      }else if(par[parens[i]] !== stack.pop()){
        return false
      }
    }
    return stack.length === 0
}