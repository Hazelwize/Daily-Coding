// Your task is simply to count the total number of lowercase letters in a string.
// Examples

// lowercaseCount("abc"); ===> 3

// lowercaseCount("abcABC123"); ===> 3

// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

// lowercaseCount(""); ===> 0;

// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

function lowercaseCount(str){
    let result = 0;
    for(let i = 0 ; i <= str.length - 1; i++){
      if(str[i] >= 'a' && str[i] <= 'z'){
        result++
      } 
    }
  return result
}