const stringCalculator = (input) => {
  if (typeof input !== 'string') throw new Error(`Input must be a string`);
  // customer delimiter
  if (input.substring(0, 2) === '//') {
    // grab delimiter before new line
    let [ delimiter, parsedInput ] = [ 
      input.substring(2).split(/\r\n|\n|\r/)[0], 
      input.substring(2).split(/\r\n|\n|\r/)[1] 
    ];
    return add(parsedInput, delimiter);
  } else return add(input)
  
  function add(str, delimiter = ',') {
    let negativesCounter = [];

    let subStrings = str.split(delimiter).map( Number );
    
    subStrings = subStrings.filter(function(item) {
      if (item > 1000) return false;
      if (Math.sign(item) === -1) {
        negativesCounter.push(item);
      }

    return true
    })

    if (negativesCounter.length) throw new Error(`Negatives not allowed at ${negativesCounter.toString()}`)

    let sum = subStrings.reduce((a, b) => a + b);

    return sum;
  }
}
// stringCalculator('1,-2,-3,4,1000,-3,-2')
module.exports = stringCalculator;
