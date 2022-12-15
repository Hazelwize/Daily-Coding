// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

function twoSum(nums, sum){
    const map = {}
    const result = []
    nums.forEach(e => {
        if(map[sum - e]){
            result.push([e , map[sum-e]])
            delete map[sum-e]
        }else{
            map[e] = e
        }
    })
    return result
}


console.log(twoSum([1, 2, 2, 3, 4], 4), '[[2, 2], [3, 1]])')