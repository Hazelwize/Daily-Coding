// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => {
    let stack = []
    s.split(' ').forEach(e =>{
      if(stack[stack.length - 1] !== e) stack.push(e)
    })
    return stack.join(' ')
}