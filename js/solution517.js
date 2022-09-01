// Build Tower

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let tower = []
    let ast = '*'.repeat(nFloors * 2 - 1)
    let i = 0;
    let j = 0 
    for(let a = nFloors ; a > 0 ; a--){
      tower.unshift(`${' '.repeat(j)}${ast.slice(i)}${' '.repeat(j)}`)
  
      i += 2
      j++
    }
    if(nFloors == 1)return ['*']
    return tower
}