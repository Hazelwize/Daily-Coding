// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

function maxLetters(str){
    const count = {}
    for(const s of str){
        count[s] ? count[s]++ : count[s] = 1;
    }
    let current = 0
    let result = ''
    for(let l in count){
        if(count[l] > current){
            result = l;
            current = count[l]
        }
    }
    return result
}

console.log(maxLetters('skkekkfieiwseofwsiefikkkkkkkk'))
console.log(maxLetters('aaaoekdkweofiwefiojfskdfskjwekskakaaaaa'))