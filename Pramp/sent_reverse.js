// Sentence Reverse
// You are given an array of characters arr that consists of sequences of characters separated by space characters.Each space - delimited sequence of characters defines a word.

// Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

// Explain your solution and analyze its time and space complexities.

//   Example:

// input: arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
//                'm', 'a', 'k', 'e', 's', '  ',
//                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e']

// output: [  'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
//            'm', 'a', 'k', 'e', 's', '  ',
//            'p', 'e', 'r', 'f', 'e', 'c', 't']
// Constraints:

// [time limit] 5000ms

// [input] array.character arr

// 0 ≤ arr.length ≤ 100
// [output] array.character

/*
  Time: O(n)
  Space: O(1)
*/
function reverseWords(arr) {
  // initializing pointers to completely reverse the arr
  let start = 0;
  let end = arr.length - 1;
  // iterate across until pointers meet in middle of arr - O(n)
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  // reuse pointers both starting at 0
  start = 0;
  end = 0;
  // interates across the arr - O(n)
  while (end < arr.length) {
    // find the first space or end the arr
    if ((end + 1 === arr.length) || (arr[end + 1] === " ")) {
      // save the space pos
      let space = end + 1;
      // swap pos of each char in that word
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
      // move both pointers to next non-space char
      start = space + 1;
      end = space + 1;
      while (arr[start] === " ") {
        start++;
        end++;
      }
    } else {
      end++;
    }
  }
  // return arr
  return arr;
}