// Your job is to write a program for a vending machine that takes in M (Money put into the machine) for a purchase of P amount (cost of purchase). Return an array for what quantity of each denomination you would need for change back using the least amount of Coins [1cent, 5cents, 10cents, 25cents, 50cents, 1dollar]


function getChange(M,P){
    let change = (M - P) * 100
    let arr = [0,0,0,0,0,0]
    for(let i = 0; i < arr.length; i++){
        if(change >= 100 && i == 0){
            arr[i] = (change - (change % 100))/100
            change = change % 100
        }else if( change >= 50 && i == 1){
            arr[i] = (change - (change % 50))/50
            change = change % 50
        }else if( change >= 25 && i == 2){
            arr[i] = (change - (change % 25))/25
            change = change % 25
        }else if( change >= 10 && i == 3){
            arr[i] = (change - (change % 10))/10
            change = change % 10
        }else if( change >= 5 && i == 4){
            arr[i] = (change - (change % 5))/5
            change = change % 5
        }else if( arr[i] == 5){
            arr[i] = change
        }
    }
    return arr.reverse()
}



getChange(5,.75)
getChange(1, 1)
getChange(2, .50)
getChange(4, .25)

