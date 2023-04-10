// Write a recursive function to compute the factorial of a given integer n. How many recursive calls does your function make for a given value of n? What is the time complexity of your function?

const factorial = (n) => {
    if(n === 0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}

console.log(factorial(5))
console.log(factorial(2))
console.log(factorial(10))
console.log(factorial(7))

