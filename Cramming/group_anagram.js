var groupAnagrams = function (strs) {

  let anaHash = {};

  for (let i = 0; i < strs.length; i++) {
    let currWord = strs[i];
    let currFreqStr = getFreqStr(currWord);
    if (anaHash[currFreqStr] === undefined) {
      anaHash[currFreqStr] = [currWord];
    } else {
      anaHash[currFreqStr].push(currWord);
    }
  }

  return Object.values(anaHash);


  function getFreqStr(str) {
    // build hash w every letter (a-z)
    let hash = {};
    for (let code = "a".charCodeAt(); code <= "z".charCodeAt(); code++) {
      hash[String.fromCharCode(code)] = 0;
    }
    // get char freq from the word we're given
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      hash[char]++;
    }
    // convert hash to a string
    let freqStr = "";
    for (let key in hash) {
      freqStr += key + hash[key];
    }
    
    // ex. cat => a1b0c1d0e0f0g0h0i0j0k0l0m0n0o0pq0r0s0t1u0v0w0x0y0z0
    return freqStr;
  }
};