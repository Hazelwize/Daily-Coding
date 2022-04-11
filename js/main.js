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

//Find the number of vowels in a string
//https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  let arr = ['a', 'e', 'i','o', 'u'];
  let finalArr =[];
  [...str].forEach(e1 => arr.forEach(e2 =>{
    if(e1.toUpperCase() == e2.toUpperCase()){
      finalArr.push(e1);
    }
  }))
  return finalArr.length;
}

//Return the length of the longest word in an array of words
//https://www.codewars.com/kata/58670300f04e7449290000e5/javascript

const longest = words => Math.max(...words.map(e => e.length));

//Make the first letter of each word in a string capitalized if it is longer than two characters
//https://www.codewars.com/kata/559e5b717dd758a3eb00005a/javascript

function dropCap(n) {
  let words = n.split(' ');
  return words.map( e => {
    if(e.length > 2){
      return e[0].toUpperCase() + e.slice(1).toLowerCase();
    }else{
      return e;
    }
  }).join(' ')
}

//Compares two different arrays and returns the difference between them
//https://www.codewars.com/kata/523f5d21c841566fde000009/javascript

const arrayDiff = (a, b) => a.filter(e => {
  if(!b.includes(e)){
    return e;
  }
})

//Compares a students grade with the class average, returns true if higher than class average
//https://www.codewars.com/kata/5601409514fc93442500010b
function betterThanAverage(cl, you) {
  return you > (cl.reduce((a,b) => a + b)) / cl.length;
}

//Comibined sliced and combined strings based on a given letter
//https://www.codewars.com/kata/597bb84522bc93b71e00007e/javascript

function stringMerge(string1, string2, letter){
  string1 = string1.slice(0,(string1.indexOf(letter)))
  string2 = string2.slice(string2.indexOf(letter))
  return string1+string2;
}

//Sorts a number < 1500 into the smalles increments set by an array
//https://www.codewars.com/kata/5635e7cb49adc7b54500001c/javascript

function solve(n) {
  const arr = [500,200,100,50,20,10];
  let bills = 0;
  if( n <= 1500 && n % 10 == 0){
    for(let i = 0; i < arr.length ; i++){
      while(arr[i] <= n){
        n -= arr[i];
        bills++;
      }
    }
    return bills;
  }else{
    return -1;
  }
}    
  

