// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

// Check my other katas:

// Alphabetically ordered

// Case-sensitive!

// Not prime numbers

function nearestSq(n){
    return n <= 2 ?  1 : (Math.round(Math.sqrt(n))) ** 2
}