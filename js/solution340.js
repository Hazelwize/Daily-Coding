// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

//P: number
//R: true or false
//E:
//P: If num divided by 2 doesn't have a remainder, return true

function testEven(n) {
   return n % 2 == 0
}





testEven(9) //false
testEven(2) // true
