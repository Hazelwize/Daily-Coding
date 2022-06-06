// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"


function replace(s){
    const vowels = 'aeiouAEIOU'
    return [...s].map(e => vowels.indexOf(e) !== -1 ? e = '!': e).join('')
  }