// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
    return  Array.from({length:n},(el,i) => i+1)
            .filter(e => e % 3 == 0 || e % 5 == 0)
            .reduce((acc,c)=> acc + c , 0)
}