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

//tells positions of vowels including 'y' in a string
//https://www.codewars.com/kata/5680781b6b7c2be860000036

function vowelIndices(word){
  let arr = ['a', 'e', 'i', 'o', 'u', 'y'];
  let vow = [];
  word = [...word.toLowerCase()].map((e,i)=> {
      for(let j = 0; j < arr.length; j++){
        if( e == arr[j]){
          vow.push(i+1);
        }
      }
 })
  return vow;
}

//take a binary string and creates a parity bit for it based on even or odd
//https://www.codewars.com/kata/5df261342964c80028345a0a

function checkParity(parity, bin){
  let num = [...bin].filter(e => e == '1');
  if(parity == 'odd'){
    return num.length % 2 != 0 ? 0 : 1;
  }else{
    return num.length % 2 == 0 ? 0 : 1;
  }
}

//take any number and convert to binary 
//https://www.codewars.com/kata/55606aeebf1f0305f900006f

function toBinary(n){
  return (n >>> 0).toString(2);
 }

 //take a name and reverse the first and last name
 //https://www.codewars.com/kata/559ac78160f0be07c200005a

 function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}
  

//Find narcisistic numbers
//https://www.codewars.com/kata/56b22765e1007b79f2000079

function isNarcissistic(n){
  n = String(n);
  let total = 0;
  [...n].forEach(e =>{
    total += +(e ** n.length)
  })
  return total == +(n);
}

//Sort a string into Upper, Lower, Number, and Special characters
//https://www.codewars.com/kata/5a29a0898f27f2d9c9000058

function solve(s){
  let arr = [0,0,0,0];
  [...s].forEach(e => {
    (e >= 'A' && e <= 'Z') ? arr[0] += 1 :
    (e >= 'a' && e <= 'z') ? arr[1] += 1 :
    (e >= 0 && e <= 9) ? arr[2] += 1:
    arr[3] += 1 
  })
  return arr;
}
//Reverse the string passed into the function
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function solution(str){
  return[...str].reverse().join('')
}

//Reverse each word in a string
//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4


function reverseWords(str) {
  return str.split(' ').map(e => e.split('').reverse().join('')).join(' ')

}


//Find the smallest integer in the array
//https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b)=> a-b)[0];
    
  }
}


//count the number of smiley faces in a string
//https://www.codewars.com/kata/583203e6eb35d7980400002a

function countSmileys(arr) {
  if(arr.length == 0){
    return 0
  }else{
    let faces = [':)',':D', ':-)',':-D',':~)',':~D',';)',';D', ';-)',';-D',';~)',';~D']
    return arr.filter(e => faces.indexOf(e) != -1 ).length
  }
}

//convert boolean to a string
//https://www.codewars.com/kata/551b4501ac0447318f0009cd

function booleanToString(b){
  return String(b)
}


//get the character in the middle of a string
//https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s){
  return s.length % 2 == 0 ? `${s[s.length/2 -1]}${s[s.length /2]}` :
   `${s[(s.length - 1)/2]}`
 }


//Convert a string to a number
//https://www.codewars.com/kata/544675c6f971f7399a000e79

 const stringToNumber = str => +str

//replace duplicated characters with ) and single occurences with (
//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c


 function duplicateEncode(word){
  let obj = {}
  word.toLowerCase().split('').forEach(el =>{
    obj[el] ? obj[el]++ : obj[el] = 1;
  })
  return word.toLowerCase().split('').map(e =>{
    if(obj[e] > 1){
      return ')'
    }else{
      return '('
    }
  }).join('')
}

//Unique in Order
//https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder=function(iterable){
  return [...iterable].filter((e, i) => {
    if(e != iterable[(i+1)]){
      return e;
    }
  })
}


// Convert a Number to a String
//https://www.codewars.com/kata/5265326f5fda8eb1160004c8

function numberToString(num) {
  return String(num)
}

//write a number in descending order from greatest to least
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n){
  return  Number([...(n.toString())].sort((a,b) => b - a).join(''))
 }

//Count by X
//https://www.codewars.com/kata/5513795bd3fafb56c200049e

 function countBy(x, n) {
  let z = [];
  for(let i = 1; i <= n; i++){
    z.push(x * i)
  }
  return z;
}

//Invert Values
//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad


const invert = array => array.map(e => e * -1)

//Reversed Sequence
//https://www.codewars.com/kata/5a00e05cc374cb34d100000d


const reverseSeq = n => {
  let arr = [];
  while(n > 0){
    arr.push(n)
    n--
  }
  return arr;
};

//Friend or Foe?
//https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(friends){
  return friends.filter( names => names.length == 4)
}  

//Opposite number
//https://www.codewars.com/kata/56dec885c54a926dcd001095

function opposite(number) {
  return number * -1;
}

//Find Maximum and Minimum Values of a list
//https://www.codewars.com/kata/577a98a6ae28071780000989

var min = function(list){
    
  return Math.min(...list)
}

var max = function(list){
  
  return Math.max(...list)
}

//Remove exclamation marks
//https://www.codewars.com/kata/57a0885cbb9944e24c00008e

function removeExclamationMarks(s) {
  return [...s].filter(e => e != '!').join('')
}

//Return Negative
//https://www.codewars.com/kata/55685cd7ad70877c23000102

const makeNegative = num => num > 0 ? -num : num;


//Beginner Series #4 Cockroach
//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6

function cockroachSpeed(s) {
  return Math.floor(s * 27.7778)
}

//Remove the minimum
//https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  let lowest = numbers.indexOf(Math.min(...numbers)) 
  let arr =  numbers.slice()
  arr.splice(lowest,1)
  return arr
}


//Third Angle of a Triangle
//https://www.codewars.com/kata/5a023c426975981341000014

function otherAngle(a, b) {
  return 180 - a - b
}

//Basic Mathematical Operations
//https://www.codewars.com/kata/57356c55867b9b7a60000bd7

function basicOp(operation, value1, value2)
{
  return eval(`${value1}${operation}${value2}`)
}

//Remove String Spaces
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5

function noSpace(x){
  return [...x].filter(e => e != ' ').join('')
 }


 //Simple Multiplication
 //https://www.codewars.com/kata/583710ccaa6717322c000105

 function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}

//Odd or Even?
//https://www.codewars.com/kata/5949481f86420f59480000e7

function oddOrEven(arr) {
  return arr.reduce((a,b) => a + b,0) % 2 ? "odd" : "even"
}

//Who like it?
//https://www.codewars.com/kata/5266876b8f4bf2da9b000362

function likes(n) {
  return n.length > 3 ? `${n[0]}, ${n[1]} and ${n.length -2} others like this` :
  n.length > 2 ? `${n[0]}, ${n[1]} and ${n[2]} like this` :
  n.length > 1 ? `${n[0]} and ${n[1]} like this` :
  n[0] == undefined ?  "no one likes this" : `${n[0]} likes this`
  
}

//Replace With Alphabet Position
//https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  let abc = 'abcdefghijklmnopqrstuvwxyz'
  return [...text.toLowerCase()].filter(e => abc.indexOf(e) != -1)
         .map(e => abc.indexOf(e)+1).join(' ')
}

//Sum of odd numbers
//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

function rowSumOddNumbers(n) {
  return n**3
}

//Equal sides of an array
//https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr){
  let result = -1
  arr.forEach((e,i) => {
    let sideOne = arr.slice(0,i)
    let sideTwo = arr.slice(i+1)
    if(sideOne.reduce((a,b) => a + b, 0) == sideTwo.reduce((a,b) => a + b ,0)){
      result = i ;
    }
  })
  return result

}

//Sum Mixed Array
//https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x){
  return x.reduce((a,b) => a + +b,0)
}


//Alternating Case
//https://www.codewars.com/kata/56efc695740d30f963000557

String.prototype.toAlternatingCase = function () {
  return this.split('').map(e => e < 'a' ? e.toLowerCase():e.toUpperCase()).join('')
}

//Is he gonna survive?

function hero(bullets, dragons){
  return bullets/2 >= dragons
}

//Twice as old
//https://www.codewars.com/kata/5b853229cfde412a470000d0

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2)
}

//Function 1 -hello world
//https://www.codewars.com/kata/523b4ff7adca849afe000035

function greet() {
  let hello = "aaneowkhboekslejqoeivlskapeolnvmxieosjakei fpqowiwfjbnslodkqplsrbnvmsilapeoridbnvieo!"
  return [...hello].filter((e,i) => {
    if(i % 7 === 0 && i > 5){
      return hello[i]
    } 
  }).join('')
  }

//Sentence Smash
//https://www.codewars.com/kata/53dc23c68a0c93699800041d

  function smash (words) {
    return words.join(' ')
 };

//Correct the mistakes of the character recognition software
//https://www.codewars.com/kata/577bd026df78c19bca0002c0

 function correct(string){
  return[...string].map(e => {
    if(e == '5'){
      return 'S'
    }else if(e == '0'){
      return 'O'
    }else if(e == '1'){
      return 'I'
    }else{
      return e
    }
  }).join('')
}

//Are You Playing Banjo?
//https://www.codewars.com/kata/53af2b8861023f1d88000832

function abbrevName(name){
  return name.split(' ').map(e => e[0].toUpperCase()).join('.')
}

//Sort The Odd
//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  let odd = array.slice().filter(e => e % 2 != 0).sort((a,b)=> a - b)
  let i = 0
  return array.map(e => {
    return e % 2 == 0 ? e : odd[i++]
  })
}

//Switch it up!
//https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

function switchItUp(number){
  switch(number){
   case 0 :
    return 'Zero'
    break;
   case 1 :
    return 'One'
    break;
   case 2 :
    return 'Two'
    break;
   case 3 : 
    return 'Three'
    break;
   case 4 :
    return 'Four'
    break;
   case 5 :
    return 'Five'
    break;
   case 6 : 
    return 'Six'
    break;
   case 7 :
    return 'Seven'
    break;
   case 8 :
    return 'Eight'
    break;
   case 9 : 
    return 'Nine'
    break;
 }
}

//Take a ten minutes walk
//https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  if(walk.length == 10){
    let dir = {}
    walk.forEach(e =>{
      dir[e] ? dir[e]++ : dir[e] = 1
    })
    return dir.n == dir.s && dir.e == dir.w 
  }
}

//Calculate Average
//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function find_average(array) {
  return array[0] == undefined ? 0 : array.reduce((acc, c) => acc + c, 0) / array.length
}

//Quarter of the year
//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

const quarterOf = (month) => {
  return Math.ceil(month/3)
}

//Detect Pangram
//https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string){
  let abc = 'abcdefghijklmnopqrstuvwxyz'
  let result = [...abc].filter(e => {
    return string.toLowerCase().indexOf(e) == -1
  })
  return result.length == 0 
}

//You're a square!
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e

var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n))
}

//Transportation on vacation
//https://www.codewars.com/kata/568d0dd208ee69389d000016

function rentalCarCost(d) {
  return d >= 7 ? d * 40 - 50 : 
  d >= 3 ? d * 40 - 20:
  d * 40
}


//Sum without highest and lowest numbers
//https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
  if(array == null || array[1] == undefined){
    return 0
  }else{
    let subVal = (Math.min(...array) + Math.max(...array))
    return array.reduce((a , b) => a + b) - subVal
  }
}