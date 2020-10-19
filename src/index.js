module.exports = function check(str, bracketsConfig) {


    let result = str.split('')
    let openBrackets = [];
    let closeBrackets = [];
    let similiarBrackets = [];
    
    for (let ii=0; ii<bracketsConfig.length; ii++) {
       if (bracketsConfig[ii][0] !== bracketsConfig[ii][1]) {
    openBrackets.push(bracketsConfig[ii][0]);
    closeBrackets.push(bracketsConfig[ii][1])
       } else similiarBrackets.push(bracketsConfig[ii][0])
    }
    
    for (let j=0; j<bracketsConfig.length; j++) {
      function deleteBrackets(arr) {
    arr.forEach((elem, i) => {
      if (openBrackets.find((e,index) => {
      return e===result[i]
      }) && closeBrackets.find((e,index) => {
      return e===result[i+1]
      }) && (openBrackets.indexOf(result[i])===closeBrackets.indexOf(result[i+1])) || (result[i]==result[i+1] && result[i] == similiarBrackets.find((elem, index) => elem==result[i]))) {
        result.splice(i, 2)
         return deleteBrackets(arr)
      }
    })
    }
    }
    
     deleteBrackets(result)
     return(result==0)
    
    }
    
    

