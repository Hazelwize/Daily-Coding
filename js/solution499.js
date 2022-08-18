// Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}

function count(array){
    let result = {}
    array.forEach(e => {
      result[e] ? result[e]++ : result[e] = 1
    })
    return result
}