// ENGINEERING CHALLENGE
// If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50. For example: [‘H’, ‘i’, ‘!’, ‘ ’]

function largestSetRemovable (str) {
  // get freq of chars: [['a',6],['b',2]...]
  let freq = getCharacterFrequency(str);
  // sort freq greatest to least: [[' ',28],['a',6],...['z',1],['t',1]]
  freq.sort((a,b) => b[1] - a[1]);
  // push chars into result arr until length drops below 50
  let charCount = str.length;
  let result = [];
  while (charCount > 50) {
    let [char,amount] = freq.pop();
    result.push(char);
    charCount -= amount;
  }
  return result;

  function getCharacterFrequency (str) {
    let freqHash = {};
    for (let i = 0; i < str.length; i++) {
      let currChar = str[i];
      if (freqHash[currChar] === undefined) freqHash[currChar] = 0;
      freqHash[currChar]++;
    }

    let arr = [];
    for (let key in freqHash) {
      arr.push([key,freqHash[key]]);
    }
    return arr;
  }
}

let str = "If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.";
console.log(largestSetRemovable(str));