function checkPalindrome(str){
    if(str.length == 1 || str.length === 0){
        return true
    }
    if(str[0] === str[str.length-1]){
        return checkPalindrome(str.slice(1,-1))
    }else{
        return false
    }
}

//returns true if palindrome


console.log(checkPalindrome('racecar'), 'true')
console.log(checkPalindrome('mississippi'), 'false')
console.log(checkPalindrome('mom'), 'true')
console.log(checkPalindrome(''), 'true')