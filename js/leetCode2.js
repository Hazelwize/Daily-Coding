// 14. Longest Common Prefix
// Easy

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

 

// Constraints:

//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lowercase English letters.


//not number, only string, not null, 
//longest prefix for all strings 
// ('word', 'woke', 'woman') => 'wo'
// ('staple', 'stare', 'stipend') => 'st'

var longestCommonPrefix = function(strs) {
    let prefix = '';
    for(let i = 0; i < strs[0].length; i++){
        let allHave = strs.every(el => el[i] === strs[0][i]);
        if(!allHave) break;
        prefix += strs[0][i]
    }
    return prefix    
};
