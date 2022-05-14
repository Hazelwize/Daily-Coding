// The Story:

// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
// Task Overview:

// You have to write a function that accepts three parameters:

//     cap is the amount of people the bus can hold excluding the driver.
//     on is the number of people on the bus excluding the driver.
//     wait is the number of people waiting to get on to the bus excluding the driver.

// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
// Usage Examples:

// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting


//PREP
//P: cap (capacity), on (# on the bus excluding driver), wait (#people waiting to get on excluding driver)
//R: return 0 if enough space || num of people that won't fit
//E:
//P: Take total capacity and subtract the people on already
// take that number, and subtract it from the people waiting
// if the number waiting is not 0 then return the number left

function enough(cap, on, wait) {
    let left = wait - (cap - on)
    if( left > 0 ){
        return left
    }else{
        return 0
    }
  }


  enough(10, 5, 5) // 0 
  enough(10, 8, 5) // 3
  enough(20, 2, 30) //12
