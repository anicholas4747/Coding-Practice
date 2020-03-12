
const truckin = (numTrucks) => {
  const maxDist = 100;
  let distTraveled = 0;
  while(numTrucks > 0){
    distTraveled += (maxDist/numTrucks);
    numTrucks--;
  }
  return distTraveled;
};

console.log(truckin(50));