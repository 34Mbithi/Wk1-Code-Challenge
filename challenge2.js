function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;
  const demeritPointsThreshold = 12;

  if (speed < speedLimit) {
      console.log("Ok");
      return;
  }

  // Calculate demerit points
  let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);

  // Output demerit points
  console.log(`Points: ${demeritPoints}`);

  // Check if license should be suspended
  if (demeritPoints > demeritPointsThreshold) {
      console.log("License suspended");
  }
}