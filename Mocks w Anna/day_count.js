// Mar 30 2020

// Problem:
// Write a program to count the number of days between two dates.
// The two dates are given as strings, their format is YYYY - MM - DD as shown in the examples.

//   Example 1:
// Input: date1 = "2019-06-29", date2 = "2019-06-30"
// Output: 1

// Example 2:
// Input: date1 = "2020-01-15", date2 = "2019-12-31"
// Output: 15

// Pseudo Code:
// Store yr, m, d in diff vars
// Compare months
// If m2 > m1
// Figure out leap years
//   (yr2 - y1) % 4

// { month: numDays }

// Absolute vals

// indices
// "2019-06-29"
// "0123456789"

Cases: 
// - same date
// - same year
// - leap years
// - full year passed + some days/months
// - that full year did not pass yet

function dayCount(date1, date2) {
  let daysByMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let y1 = parseInt(date1.slice(0, 4));
  let y2 = parseInt(date2.slice(0, 4));

  let m1 = parseInt(date1.slice(5, 7));
  let m2 = parseInt(date2.slice(5, 7));

  let d1 = parseInt(date1.slice(8));
  let d2 = parseInt(date2.slice(8));

  let timeElapsed = 0;
  timeElapsed += figureOutYears();
  timeElapsed += figureOutMonths();
  timeElapsed += figureOutDays();

  return timeElapsed;

  function figureOutYears () {
    let yearsElapsed = Math.abs(y1 - y2);
    let leapDays = yearsElapsed % 4;
    if ((y2 > y1 && (y2 % 4 === 0)) || (y1 > y2 && (y1 % 4 === 0))) leapDays += 1;
    return (yearsElapsed * 365) + leapDays;
  }

  function figureOutMonths () {
    if (m1 === m2) return 0;

    let days = 0;
    if ((y1 > y2 && m1 > m2) || (y1 < y2 && m1 < m2)) {
      for (let i = m1; i < m2; i++) {
        days += daysByMonth[i];
      }
    } else if (y1 > y2 && m1 < m2) { 
      for (let i = m2; i < (12 + m1); i++) {
        days += daysByMonth[i % 12];
      }
      days -= 365; 
    } else { //if (y1 < y2 && m1 > m2)
      for (let i = m1; i < (12 + m2); i++) {
        days += daysByMonth[i % 12];
      }
      days -= 365; 
    }
    return days;
  }

  function figureOutDays () {
    if (m1 === m2) return Math.abs(d1 - d2);

    if (m1 > m2) {
      return (daysByMonth[m2] - d2) + d1;
    } else { // if (m1 < m2)
      return (daysByMonth[m1] - d1) + d2;
    }
  }
}

console.log(dayCount("2019-06-29","2019-06-30")); // 1
console.log(dayCount("2019-06-30","2019-06-30")); // 0

console.log(dayCount("2020-01-01","2020-08-01")); // 213 bc leap year day passed
console.log(dayCount("2020-01-01","2016-08-01")); // 3y5m = 1245ish
console.log(dayCount("2020-08-01","2015-06-01"));
console.log(dayCount("2020-02-01","2025-05-01"));
console.log(dayCount("2020-09-01","2025-03-01"));

console.log(dayCount("2020-01-27","2020-01-15"));
console.log(dayCount("2020-01-15","2020-01-27"));
console.log(dayCount("2020-03-30","2020-02-15"));
console.log(dayCount("2020-04-25","2020-07-11"));

console.log(dayCount("2025-01-27","2020-01-15"));
console.log(dayCount("2025-01-15","2020-01-27"));
console.log(dayCount("2020-03-30","2025-02-15"));
console.log(dayCount("2020-04-25","2025-07-11"));
