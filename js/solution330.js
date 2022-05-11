// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let x = weight / height ** 2
    return  x <= 18.5 ? "Underweight":
            x <= 25.0 ? "Normal":
            x <= 30.0 ? "Overweight": "Obese"    
  }