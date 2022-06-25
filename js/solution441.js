// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3


function highestRank(arr){
    const obj = {}
    arr.forEach(el =>{
      return obj[el] ? obj[el]++ : obj[el] = 1;
    })
     let result = 0;
     let val = 0
     for(let key in obj){
       if(obj[key] >= val){
         val = obj[key]
         result = key
       }
     }
     return Number(result)
   }