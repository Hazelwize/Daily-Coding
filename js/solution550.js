// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase=function(){
    console.log(this)
    return this.split(' ').map(e => {
      if(e == '') {
        return ""
      }else{ 
        return e[0].toUpperCase() + e.slice(1).toLowerCase()
      }
    }).join('')
}