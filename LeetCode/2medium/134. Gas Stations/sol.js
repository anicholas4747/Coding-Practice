let gas = [1,2,3,4,5];
let cost = [3,4,5,1,2];

function gasStations (gas,cost){
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] >= cost[i]) {
      let start = i;
      let route = [start];
      let currFuel = gas[i] - cost[i];
      let end = start + 1;

      while (end < gas.length && currFuel > 0) {
        currFuel += gas[end] - cost[end];
        route.push(end);
        end++;
      }
      end = 0;
      while (end < start && currFuel > 0) {
        currFuel += gas[end] - cost[end];
        route.push(end);
        end++;
      }
      if (route.length === gas.length && start === end && currFuel >= 0) return start;
    }
  }
  return -1;
}

console.log(gasStations(gas,cost)); // => 3

gas = [2,3,4];
cost = [3,4,3];

console.log(gasStations(gas,cost)); // => -1