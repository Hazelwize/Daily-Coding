// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

function mygcd(x,y){
    if(x === 1 || y === 1) return 1;
    let [small, big] = x > y ? [y, x] : [x, y];
    for(let i = 1; i <= small; i++){
      if(big % (small / i) === 0){
        return small/i
      }
    } 
  }
  