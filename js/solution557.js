// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.
// Examples

// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


function cleanString(s) {
    s = [...s]
    while(s.indexOf('#') !== -1){
      if(s[0] === '#'){
        s.splice(0,1)
      }else{
        s.splice((s.indexOf('#') - 1), 2)
      }
    }
    return s.join('')
}