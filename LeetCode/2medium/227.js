// Implement a basic calculator to evaluate a simple expression string.

// The expression string contains only non - negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

// Example 1:

// Input: "3+2*2"
// Output: 7
// Example 2:

// Input: " 3/2 "
// Output: 1
// Example 3:

// Input: " 3+5 / 2 "
// Output: 5
// Note:

// You may assume that the given expression is always valid.
// Do not use the eval built -in library function.

var calculate = function (s) {
  s = s.trim();
  let res = 0;
  let calcArr = [];

  // arr of nums and operations
  for (let i = 0; i < s.length; i++) {
    if ("0123456789".includes(s[i])) {
      let numStr = "";
      while (i < s.length) {
        if ("0123456789".includes(s[i])) {
          numStr = numStr.concat(s[i]);
        } else {
          break;
        }
        i++;
      }
      calcArr.push(parseInt(numStr));
    }
    if ("+-*/".includes(s[i])) {
      calcArr.push(s[i]);
    }
  }

  // PEMDAS eval
  while (calcArr.length > 1) {
    let newArr = [];
    let opOccurred = false;

    for (let i = 1; i < calcArr.length; i++) {
      // console.log(`i: ${i}`)
      // console.log(`newArr: ${newArr}`)
      // console.log(`calcArr: ${calcArr}`)
      
      let left = calcArr[i - 1];
      let self = calcArr[i];
      let right = calcArr[i + 1];

      if (opOccurred) {
        newArr.push(right);
        continue;
      }

      let noMult = !calcArr.includes("*");
      let noDiv = !calcArr.includes("/");

      if (self === "*"){
        newArr.push(left * right);
        opOccurred = true;
      } else if (self === "/") {
        newArr.push(parseInt(left / right));
        opOccurred = true;
      } else if (self === "+" && noMult && noDiv) {
        newArr.push(left + right);
        opOccurred = true;
      } else if (self === "-" && noMult && noDiv) {
        newArr.push(left - right);
        opOccurred = true;
      } else {
        newArr.push(left);
      }
    }
    calcArr = newArr;
  }

  return calcArr[0];
    
};

// console.log(calculate("1+1+1"));
// console.log(calculate("3+2*2"));
// console.log(calculate("2*6/3"));
// console.log(calculate("1-1-1-2+3"));
