// str = "3[ab]"

// str = "3[ab2[c]d]ef"
// res = "abccdabccdabccdef"
/*
Input: str
Output: str
Edges : empty str
Assumptions: num can be anything
High Level Approach:
  recursion
  base case is empty or no brackets
  find number
  concat prefix to num * recursive call on content of [] & concat suffix

// string builder -> arr of strings
let arr = [];
arr.push('abc','def','ghi');
arr.join();
*/


function expandingStr (str) {
  if (str.length === 0) return "";
  if (!str.includes("[") && !str.includes("]")) return str;

  let start = 0;
  let end = 0;

  let prefix;
  let num = findNum();
  let content = findContent();
  let suffix;

  return createResultStr();

  function findNum() {
    // find start number
    while (!"0123456789".includes(str[start])) {
      start++;
    }
    end = start;
    // find end of the number
    while ("0123456789".includes(str[end])) {
      end++;
    }
    prefix = str.slice(0, start);
    num = parseInt(str.slice(start, end));
  }

  function findContent() {
    //look for bracket
    start = end;
    end = str.length - 1;
    while (end >= 0) {
      if (str[end] === "]") {
        break;
      }
      end--;
    }
    content = str.slice(start + 1, end);
    suffix = str.slice(end + 1);
  }

  function createResultStr () {
    // create result str
    let res = prefix;
    let expandedContent = expandingStr(content);
    for (let i = 0; i < num; i++) {
      res += expandedContent;
    }
    res += suffix;
  }
}

let str = "3[ab2[c]d]ef";
console.log(expandingStr(str));