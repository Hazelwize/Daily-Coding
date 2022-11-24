const addRad = (word) => {
    return `${word} is RAD!!`
}

const memoize = (cb) => {
    const cache = {};
    return (n) => {
        if(n in cache){
            console.log("I cached")
            return cache[n]
        }else{
            console.log(arguments[0])
            cache[n] = cb(n)
            return cache[n]
        }
    }
}

const memoizeRadness = memoize(addRad)

console.log(memoizeRadness('pickles'))
console.log(memoizeRadness('pickles'))