function numRooms (meetings) {
  if (!meetings.length) return 0;

  meetings.sort((a,b) => (a[0] !== b[0]) ? a[0]-b[0] : a[1]-b[1]);

  let mI = [];
  while (!meetings.every(el=>el===null)) {
    let prevI = [Infinity,-Infinity];
    for (let i = 0; i < meetings.length; i++) {
      let currI = meetings[i];
      if (currI === null) continue;

      let [prevS,prevE] = prevI;
      let [currS,currE] = currI;

      if (prevE <= currS) {
        prevI[0] = Math.min(prevS,currS);
        prevI[1] = Math.max(prevE, currE);
        meetings[i] = null;
      }
    }
    mI.push(prevI);
  }
  return mI.length;
}

console.log(numRooms([[0,30],[5,10],[15,20]]) === 2, 2); //=> 2

console.log(numRooms([[7,10],[2,4]]) === 1, 1); //=> 1

console.log(numRooms([[1,5],[3,7],[15,20],[6,22],[8,12]]) === 2, 2); //=> 2

console.log(numRooms([[1,2],[1,3],[1,4],[1,8]]) === 4, 4); //=> 4