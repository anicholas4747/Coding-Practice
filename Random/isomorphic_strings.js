/**
 * Given two strings
 * Return boolean if they're isomorphic
 * 
 * Examples:
 * "add" & "egg" => true
 * "title" & "cycle" => true
 * "book" & "ride" => false
 * "abc" & "cba" => true
 */

function areIso(str1,str2) {
  if (str1.length !== str2.length) return false; // O(1)
  if (str1 === "" || str2 === "") return false; // O(1)

  let arr1 = buildArr(str1); // O(n)
  let arr2 = buildArr(str2); // O(n)

  return compareArrs(); // O(n)

  function buildArr(str) {
    let hash = {};
    for (let i = 0; i < str.length; i++){
      if(hash[str[i]] === undefined) {
        hash[str[i]] = [i];
      } else {
        hash[str[i]].push(i);
      }
    }
    return Object.values(hash);
    // {t:[0,2],i:[1],l:[3],e:[4]} => [[0,2],[1],[3],[4]]
  }

  function compareArrs () {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      for (let idx = 0; idx < arr1[i].length; idx++) {
        if (arr1[i][idx] !== arr2[i][idx]) return false;
      }
    }
    return true;
  }
}

console.log(areIso("add","egg")) // => true
console.log(areIso("title","cycle")) // => true
console.log(areIso("book","ride")) // => false
console.log(areIso("abc","cba")) // => true

/**
 * What is n? Length of the strs
 * Time Complexity: O(n) - iterate through each char
 * Space Complexity: O(n) - initialize hashes and arrays 
 */