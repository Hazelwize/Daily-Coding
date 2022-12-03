// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 


function reverseWord(str){
    let result = '';
    for(let i = 0 ; i < str.length; i++){
        result = str[i] + result
    }
    return result
}





console.log(reverseWord('best'), 'tseb')
console.log(reverseWord('wrong'),'gnorw')