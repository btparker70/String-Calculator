const stringCalculator = (input) => {
  if (typeof input !== 'string') throw new Error('Input must be a string');

  // customer delimiter(s)?
  if (input.substring(0, 2) === '//') {
    // grab delimiter(s) before new line
    let [ delimiters, parsedInput ] = [ 
      input.substring(2).split(/\r\n|\n|\r/)[0], 
      input.substring(2).split(/\r\n|\n|\r/)[1] 
    ];
    return add(parsedInput, delimiters);
  } else return add(input)
  
  function add(str, delimiters = ',') {
    let negativesCounter = [];

    // multiple delimiters?
    if (delimiters !== ',') {
      delimiters = delimiters.replace(',', '');
      delimiters = new RegExp(`[${delimiters}]`)
    }

    // separate and convert values to numbers
    let subStrings = str.split(delimiters).map( Number );
    
    // check for <1000 and negatives
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

module.exports = stringCalculator;