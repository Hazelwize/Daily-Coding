// Write a recursive function to compute the sum of the digits of a given integer n. For example, the sum of the digits of 123 is 6 (1 + 2 + 3). What is the time complexity of your function?

const sumOfDigits = (n) => {
    if(n <= 9){
        return n
    }else{
        return n % 10 + sumOfDigits((n - n % 10) / 10) 
    }
}

console.log(sumOfDigits(3456))
console.log(sumOfDigits(22))
console.log(sumOfDigits(24))
console.log(sumOfDigits(2456))
console.log(sumOfDigits(200001))
console.log(sumOfDigits(10045923))
console.log(sumOfDigits(2349))

