function convertToRoman(num) {
  if (num === 0) return "";

  const symbols = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
  ];

  let result = "";

  for (let [symbol, value] of symbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line


  



// do not edit below this line
module.exports = convertToRoman
