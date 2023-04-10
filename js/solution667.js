// Write a recursive function to calculate the Fibonacci sequence up to a given number n. What is the time complexity of your function?

const countFib = (n) => {
    if(n <= 1){
        return n === 1 ? 1 : 0
    }else{
        return countFib(n-1) + countFib(n-2)
    }
}

console.log(countFib(5))
console.log(countFib(14))
console.log(countFib(8))
console.log(countFib(2))