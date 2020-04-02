// recursive
function bSearch (arr, target) {
  if (arr.length < 1) return -1;
  let mid = Math.floor(arr.length / 2);

  let alp = 'abcdefghijklmnopqrstuvwxyz';
  let alpArr = alp.split("");

  let midCharIdx = alpArr.findIndex(char => arr[mid] === char);
  let targIdx = alpArr.findIndex(char => target === char);

  if (arr[mid] === target) {
    return mid;
  } else if (midCharIdx < targIdx) { // search right
    let res = bSearch(arr.slice(mid+1),target);
    if (res === -1) {
      return -1;
    } else {
      return mid + res + 1;
    }
  } else { // search left
    return bSearch(arr.slice(0,mid), target);
  }
}

// iterative
// function bSearch(arr, target) {

// }

let arr = ['a', 'c', 'd', 'g', 'n', 'q', 't', 'v'];

console.log(bSearch(arr,'a')); // => 0
console.log(bSearch(arr,'v')); // => 7
console.log(bSearch(arr,'g')); // => 3
console.log(bSearch(arr,'n')); // => 4
console.log(bSearch(arr,'p')); // => -1
console.log(bSearch(arr,'b')); // => -1