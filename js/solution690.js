// 9. Palindrome Number
// Easy
// 9.8K
// 2.5K
// Companies

// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 

// Constraints:

//     -231 <= x <= 231 - 1

 
// Follow up: Could you solve it without converting the integer to a string?

var isPalindrome = function(x) {
    if(x < 0 || x % 10 === 0 && x !== 0) return false
    if(x < 10) return true
    let str = x.toString()
    let len = str.length
    let result = '';
    while(len !== 0){
        result += str[len - 1]
        len--
    }
    return result === str    
};