class MinHeap {
  constructor () {
    this.size = 0;
    this.collection = [undefined];
    // left child = (i * 2)
    // right child = (i * 2) + 1
    // parent = Math.floor(i/2)
  }

  add (num) {
    this.collection.push(num);
    this.size++;
    if (this.size === 0) return;
  
    let currentIdx = this.size;
    let parentIdx = Math.floor(currentIdx / 2);

    while (this.collection[currentIdx] < this.collection[parentIdx]) {
      [this.collection[idx], this.collection[parentIdx]] = [this.collection[parentIdx], this.collection[idx]];
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

}

let mh = new MinHeap();
mh.add(5);
console.log(mh.collection); // [undefined, 5]
mh.add(7);
console.log(mh.collection); // [undefined, 5,7]
mh.add(2);
console.log(mh.collection); // [undefined,2,7,5]
mh.add(8);
console.log(mh.collection); // [undefined,2,7,5,8]