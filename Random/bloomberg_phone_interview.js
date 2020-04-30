reserve(table_id, start, end);
isReserved(table_id, start, end);

// 1 - 25 table ids
/*
// [
[0, 2]
[2, 5]
[7, 8]
]
// [
[0, 5]
[7, 8]
]
*/
class Restaurant {
  constructor(numTables) {
    this.tables = {} // {tableId:[[resStart,resEnd]]}
    for (let i = 1; i <= numTables; i++) {
      this.tables[i] = []; // minHeap that sorts on insert by start time
    }
  }

  /*
  1 6
  */

  reserve(tableId, start, end) {
    let reservations = this.tables[tableId];
    let mergedTimes = [];
    for (let i = 0; i < reservations.length - 1; i++) {
      let currSlot = reservations[i];
      let nextSlot = reservations[i + 1];
      if (currSlot[1] === nextSlot[0]) {
        mergedTimes.push([currSlot[0], nextSlot[1]]);
      } else {
        mergedTimes.push(currSlot);
      }
    }
    this.tables[tableId] = mergedTimes;
    // check for open slots
    // insert new reservation if available
    // return false if not
  }

  isReserved(tableId, start, end) {
    let mergedTimes = this.tables[tableId];
    mergedTimes.forEach(slot => {
      if (start >= slot[0] && end <= slot[1]) return true;
    })
    return false;
  }
}