function canAttend (meetings) {
  if (!meetings.length) return true;

  meetings.sort((a, b) => (a[0] !== b[0]) ? a[0] - b[0] : a[1] - b[1]);

  for (let i = 1; i < meetings.length; i++) {
    let [prevS,prevE] = meetings[i-1];
    let [currS, currE] = meetings[i];

    if (prevE >= currS) return false;
  }

  return true;
}

console.log(canAttend([[0,30],[5,10],[15,20]])); //=> false
console.log(canAttend([[7,10],[2,4]])); //=> true