// Your task is to write function factorial.

function factorial(n){
    let result = n
    if(n >= 1){
      for(n ; n > 1; n--){
        result *= n-1
      }
      return result 
    }
    return 1
}
