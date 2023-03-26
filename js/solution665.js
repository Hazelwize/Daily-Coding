// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'

// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// Remember that there can't be more than 3 identical symbols in a row.

function solution(number){
    const num = [
      {
        '1': 'I',
        '2': 'II',
        '3': "III",
        '4': 'IV',
        '5': 'V',
        '6': 'VI',
        '7': 'VII',
        '8': 'VIII',
        '9': 'IX'
      },
      {
        '1': 'X',
        '2': 'XX',
        '3': "XXX",
        '4': 'XL',
        '5': 'L',
        '6': 'LX',
        '7': 'LXX',
        '8': 'LXXX',
        '9': 'XC'
      },
      {
        '1': 'C',
        '2': 'CC',
        '3': "CCC",
        '4': 'CD',
        '5': 'D',
        '6': 'DC',
        '7': 'DCC',
        '8': 'DCCC',
        '9': 'CM'
      },
      {
        '1': 'M',
        '2': 'MM',
        '3': "MMM",
      },
    ]
    const str = String(number)
    let current = 0;
    let result = '';
    for(let i = str.length - 1 ; i >= 0 ; i--){
      if( str[i] > '0'){
        result = num[current][str[i]] + result
      }
      current++
    } 
    return result 
  }