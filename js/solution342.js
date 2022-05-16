// Is the string uppercase?
// Task

// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

// "c".isUpperCase() == false
// "C".isUpperCase() == true
// "hello I AM DONALD".isUpperCase() == false
// "HELLO I AM DONALD".isUpperCase() == true
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true

// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

//P: string
//R: true if all letters are uppercase, false if not
//E:
//P: take the string and check equality to the string fully capitalized

String.prototype.isUpperCase = function(){
    return this.toUpperCase() == this
}


'tkdosjwkTKEIOLW'.isUpperCase() // false
'KWEIFGEIVKME'.isUpperCase()// true