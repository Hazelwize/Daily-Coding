// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//P: string in camelCase
//R: string separated into words
//E:
//P: find the capital letters, then insert a space before them, then return the word.

function solution(string){
    return[...string].map((e,i) =>{
       return e == e.toUpperCase() ? e = ' ' + e : e
    } ).join('')
}


solution('camelCase') //camel Case
solution('whereAreYou')//where Are You