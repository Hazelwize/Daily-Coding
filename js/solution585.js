// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

//     dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

//     dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

//First Attempt:
// function dup(s) {
//     let result = []
//       for(let i = 0; i < s.length; i++){
//         result.push(removeDups(s[i]))
//       }
//     return result
//   };
  
//   function removeDups(s){
//     let result = ''
//     for(let i = 0; i < s.length; i++){
//       if(s[i] !== result[result.length - 1]){
//         result += s[i]
//       }
//     }
//     return result
// }

//Making Optimal
function dup(s) {
    let words = String(s)
    let result = ''
    for(let i = 0; i < words.length; i++){
      if(words[i] !== words[i-1]){
        result += words[i]
      }
    }
    return result.split(',')
};