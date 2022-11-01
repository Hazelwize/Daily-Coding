// Given a string, return a new string that has transformed based on the input:

//     Change case of every character, ie. lower case to upper case, upper case to lower case.
//     Reverse the order of words from the input.

// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"

// You may assume the input only contain English alphabet and spaces.

//First Attempt
// function stringTransformer(str) {
//     let newStr = str.split('')
//     return newStr.map(e => {
//       return e < 'a' ? e.toLowerCase(): e.toUpperCase()
//     }).join('').split(' ').reverse().join(' ')
    
// }

function stringTransformer(str) {
    let result = ''
    let curr = ''
    for(let i = str.length - 1 ; i >= 0 ; i--){
      if(str[i] === ' '){
        result += curr + ' '
        curr = ''
      }else{
        str[i] < 'a' ? curr = str[i].toLowerCase() + curr : curr = str[i].toUpperCase() + curr
      }
    }
    result += curr
    return result
  }
