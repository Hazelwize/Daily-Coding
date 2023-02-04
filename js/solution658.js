// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
    const hash = {}
    const result = []
    let count = 0
    for(const l of text){
      if(hash[l] !== undefined){
        result[hash[l]][1]++
      }else{
        hash[l] = count
        count++
        result.push([l,1])
      }
    }
    return result
  }