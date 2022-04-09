//https://www.codewars.com/kata/5f70c883e10f9e0001c89673

const flip=(d, a)=>{
    return d == 'R'? a.sort((a , b)=>a - b) : a.sort((a , b) => b - a)
  }

//https://www.codewars.com/kata/5861d28f124b35723e00005e
  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg * fuelLeft
  };

//https://www.codewars.com/kata/58261acb22be6e2ed800003a
  class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return (length * width * height)
    }
  }

  //https://www.codewars.com/kata/555086d53eac039a2a000083

  function lovefunc(f1, f2){
    return !((f1 % 2 == 0 && f2 % 2 == 0)||(f1 % 2 != 0 && f2 % 2 != 0))
  }

  //https://www.codewars.com/kata/5672a98bdbdd995fad00000f
  const rps = (p1, p2) => {
    if(p1 == 'rock' && p2 == "scissors" ||
      p1 == 'paper' && p2 == 'rock' ||
      p1 == 'scissors' && p2 == 'paper'){
      return "Player 1 won!"
    }else if(p1 == p2){
      return 'Draw!'
    }else{
      return "Player 2 won!"
    }
  };

//https://www.codewars.com/kata/58ca658cc0d6401f2700045f
  function findMultiples(integer, limit) {
    let arr = [];
    let val = 0;
    while( (integer + val) <= limit){
      val += integer;
      arr.push(val);
    }
  return arr; 
}

//https://www.codewars.com/kata/563b74ddd19a3ad462000054

function stringy(size) {
  let value = [];
  for(let i = 0 ; i < size ; i++){
    i % 2 == 0 ? value.push("1") : value.push('0');
  } 
  return value.join('');
}


//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

function removeEveryOther(arr){
  return arr.filter((e, i) =>  i % 2 == 0)
}


//https://www.codewars.com/kata/58261acb22be6e2ed800003a

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return (length * width * height)
  }
}

// Create a function that rounds to the next number divisible by 5
//https://www.codewars.com/kata/55d1d6d5955ec6365400006d

function roundToNext5(n){
  if(n % 5 == 0){
    return n;
  }else{
    while(n % 5 != 0){
      n++;
    }
    return n;
  } 
}