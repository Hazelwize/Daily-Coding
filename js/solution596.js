// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


function getSum( a,b ){
    if( a === b) return a
    let current = 0;
    if(a < b){
      let result = a;
      let current = a;
      while(current !== b){
        ++current
        result += current
      }
      return result
    }else{
        let result = b;
        let current = b;
        while(current !== a){
        ++current
        result += current
        }
      return result
    } 
    
}
  