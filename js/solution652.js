function cannonBall(num){
    if(num === 1) return 1
    return  num ** 2 + cannonBall(num - 1)
}



console.log(cannonBall(3), '14')
console.log(cannonBall(5), '55')
console.log(cannonBall(4), '30')
