// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str){
    let newArr = []
    str.split('').forEach((e,i) =>{
        if(i % 2 != 0){
          newArr.push(str.slice(i-1,i+1))
        }else if(i === str.length -1){
          newArr.push(e + '_')
        }
    })
    return newArr
}