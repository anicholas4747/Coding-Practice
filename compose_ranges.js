const composeRanges = (arr) => {
  let ranges = [];

  let start = 0;
  for (let end = 0; end < arr.length - 1; end++){
    let currNum = arr[end];
    let nextNum = arr[end + 1];
    let range;
    if (nextNum - currNum > 1) {
      range = (start === end) ? `${currNum}` : `${arr[start]}->${currNum}`;
      ranges.push(range);
      start = end + 1;
    }
  }

  if (start === arr.length - 1) {
    ranges.push(`${arr[start]}`);
  } else {
    ranges.push(`${arr[start]}->${arr[arr.length-1]}`);
  }

  return ranges;
};

let arr = [-1,0,1,2,4,5,6,8,10,12,13,14]; // => ["-1->2","4->6","8","10","12->14"]
console.log(composeRanges(arr));

arr = [-1,0,1,2,6,7,9]; // => ["-1->2","6->7","9"]
console.log(composeRanges(arr));

arr = [-5,0,1,2,6,7,9]; // => ["-5","0->2","6->7","9"]
console.log(composeRanges(arr));