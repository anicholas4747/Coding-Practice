/*
Design Phone Directory
Design a Phone Directory which supports the following operations:

get: Provide a number which is not assigned to anyone.
  check: Check if a number is available or not.
    release: Recycle or release a number.
      Example:

// Init a phone directory containing a total of 3 numbers: 0, 1, and 2.
PhoneDirectory directory = new PhoneDirectory(3);

// It can return any available phone number. Here we assume it returns 0.
directory.get();

// Assume it returns 1.
directory.get();

// The number 2 is available, so return true.
directory.check(2);

// It returns 2, the only number that is left.
directory.get();

// The number 2 is no longer available, so return false.
directory.check(2);

// Release number 2 back to the pool.
directory.release(2);

// Number 2 is available again, return true.
directory.check(2);
Last Submission
Last Saved Code
*/
/*
 * Initialize your data structure here
        @param maxNumbers - The maximum numbers that can be stored in the phone directory.
 * @param {number} maxNumbers
 */
var PhoneDirectory = function (maxNumbers) {
  this.max = maxNumbers;
  this.assignedNums = new Set();
  this.availNums = [];
  for (let i = maxNumbers - 1; i >= 0; i--) {
    this.availNums.push(i);
  }
};

/*
 * Provide a number which is not assigned to anyone.
        @return - Return an available number. Return -1 if none is available.
 * @return {number}
 */
PhoneDirectory.prototype.get = function () {
  if (this.availNums.length === 0) return -1;

  let newNum = this.availNums.pop();
  this.assignedNums.add(newNum);
  return newNum;
};

/*
 * Check if a number is available or not. 
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function (number) {
  return !this.assignedNums.has(number);
};

/*
 * Recycle or release a number. 
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function (number) {
  if (this.assignedNums.delete(number)) {
    if (number >= 0 && number < this.max) this.availNums.push(number);
  }
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
/*
["PhoneDirectory"[3],
"release"[2]
,"get"[]
,"release"[2]
,"release"[0]
,"get","get","check","get","release","get","release","release","get","check","release"]
,[],[],[1],[],[0],[],[0],[0],[],[1],[1]]

*/