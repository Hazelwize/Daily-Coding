const reverseWord = (str) => {
    if(str.length === 1){
        return str
    }
    return str[str.length-1] + reverseWord(str.slice(0,-1))
}

console.log(reverseWord('custard'))
console.log(reverseWord('hello'))
console.log(reverseWord('whatever'))
console.log(reverseWord('ping'))