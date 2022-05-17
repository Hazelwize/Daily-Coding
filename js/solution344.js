// Enough is enough!

// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?
// Task

// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

//P: list (list of numbers) num (number of times a certain number shows up)
//R: array with duplicates eliminated
//E:
//P: take the array and go through each number,
// with each number, check to see if it has appeared n times so far
// if it has, don't include it
// return the list after it has been filtered

function deleteNth(arr,n){
    let nums = {}
    return arr.filter(el => {
        if(nums[el] == undefined){
          nums[el] = 0
        }
        nums[el]++
        if(nums[el] <= n ){
            return el
        }
    })
    
}



deleteNth([2,4,3,4,5,65,5,4,4,4,4], 3) //[2,4,3,4,5,65,5,4]

