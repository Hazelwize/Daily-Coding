// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


function generateHashtag (str) {
    let result = str.split(' ').map(e => {
      if(e[0] !== undefined){
        return e[0].toUpperCase() + e.slice(1).toLowerCase()
        }
      }).join('')
    if(result.length + 1 > 140 || result == ''){
      return false
    }else{
      return '#' + result
    }
 }


console.log(generateHashtag('skekkt  efiiehw  iwfiweflkske eifie'))