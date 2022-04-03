//https://www.codewars.com/kata/5f70c883e10f9e0001c89673

const flip=(d, a)=>{
    return d == 'R'? a.sort((a , b)=>a - b) : a.sort((a , b) => b - a)
  }

//https://www.codewars.com/kata/5861d28f124b35723e00005e
  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump <= mpg * fuelLeft
  };

//https://www.codewars.com/kata/58261acb22be6e2ed800003a
  class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return (length * width * height)
    }
  }

  //https://www.codewars.com/kata/555086d53eac039a2a000083

  function lovefunc(f1, f2){
    return !((f1 % 2 == 0 && f2 % 2 == 0)||(f1 % 2 != 0 && f2 % 2 != 0))
  }