// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


function firstNonRepeatingLetter(s) {
    const low = s.toLowerCase()
    let letters = {}
    for(let i = 0; i < low.length; i++){
      letters[low[i]] ? letters[low[i]]++ : letters[low[i]] = 1
    }
    let result = ""
    for(let key in letters){
      if(result !== "")break;
      if(letters[key] === 1){
        result = key
      }
    }
    if(s.indexOf(result) == -1){
      if(s.indexOf(result.toUpperCase()) == -1){
        return result
      }else{
        return result.toUpperCase()
      }
    }else{
      return result
    }
  }