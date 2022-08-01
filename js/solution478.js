// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps

// Notes:

//     the returned string should only contain lowercase letters


function kebabize(str) {
    let result = []
    for(let i = 0; i < str.length; i++){
      if(str[i] <= '9' && str[i] >= '0')continue
      if(str[i] < 'a'){
        i === 0 || result[0] == undefined ? result.push(`${str[i].toLowerCase()}`): result.push('-' + `${str[i].toLowerCase()}`)
      }else{
        result.push(str[i])
      }
      
    }
    return result.join('') 
  }