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
    let sum = subStrings.filter(num => num < 1000).reduce((a, b) => a + b);
    console.log(sum)
    return sum;
  }
}

// stringCalculator("//;\n1;3;4")
stringCalculator("1,2,3,4,999")
// stringCalculator("//@@@@@\n1@@@@@3@@@@@4")