const stringCalculator = (input) => {
  // customer delimiter
  if (input.substring(0, 2) === '//') {
    // grab delimiter before new line
    let [ delimiter, parsedInput ] = [ 
      input.substring(2).split(/\r\n|\n|\r/)[0], 
      input.substring(2).split(/\r\n|\n|\r/)[1] 
    ];
    add(parsedInput, delimiter);
  } else add(input)
  
  function add(str, delimiter = ',') {
    let subStrings = str.split(delimiter).map( Number );

    let negativesCounter = [];
    subStrings = subStrings.filter(function(item) {
    if (item >= 1000) return false;
    if (Math.sign(item) === -1) {
      negativesCounter.push(item);
    }
    return true
    })
    if (negativesCounter.length) throw `Negatives not allowed at ${negativesCounter.toString()}`

    let sum = subStrings.reduce((a, b) => a + b);
    console.log(sum)
    return sum;
  }

}

// stringCalculator("//;\n1;3;4")
stringCalculator("1,-2,-3,4,1000,-3,-2")
// stringCalculator("//@@@@@\n1@@@@@3@@@@@4")