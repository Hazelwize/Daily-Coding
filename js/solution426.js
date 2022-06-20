// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"


var greet = function(name) {
    const format = name => {
      return name[0].toUpperCase() + name.toLowerCase().slice(1)
    }
    return `Hello ${format(name)}!`
  };