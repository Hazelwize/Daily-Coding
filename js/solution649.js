// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.

// Examples

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


function scramble(str1, str2) {
    const hash = {}
    for(const l of str1){
      hash[l] = hash[l] + 1 || 1
    }
    for(const l of str2){
      if(hash[l] > 0){
        hash[l]--
      }else{
        return false
      }
    }
    return true
  }