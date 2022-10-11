// 🏆 The Challenge - Day 3

// This week we'll be working with arrays toward a final puzzling result on Friday when we combine our daily functions. Your solutions should be built to work within any given daily constraints.

// Today's challenge is a bit of a tangent, but I think it's pretty powerful. It's inspired by my favorite Codewars kata ever, Moving Zeros To The End. This is my favorite kata because the first time I did it, my approach was so convoluted compared to the top-voted solution, which was a thing of beautiful simplicity. I think the moment I saw that solution something clicked for me and I realized the power of the built-in Javascript methods.

// Today I'd like you to write a function that:

//     takes in a given array of strings and move any entries containing the letter 'a' to the front
//     then move any remaining entries that have over 3 characters to the back
//     please preserve the relative order of entries within their given category

// Example:

// myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// // move things around
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

// Have fun!


function containsAOrThree(arr){
    return arr.sort((a,b) => {
        if(a.includes('a') && !b.includes('a')){
            return -1 
        }
        if(a.length > 3 && b.length <= 3){
            return + 1
        }
        if(a.length <= 3 && b.length > 3){
            return -1
        }
    })
}

const myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']

console.log(containsAOrThree(myArr))