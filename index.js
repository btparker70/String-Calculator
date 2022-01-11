const Add = (input) => {
  let subStrings = input.split(",").map( Number );
  let sum = subStrings.reduce((a, b) => a + b);
  return sum;
}

Add("1,2,3, ,5")