function timeTampsToDates(duration) {
  let timeDate = new Date(duration * 1000);
  const hours = timeDate.getUTCHours();
  const minutes = `0${timeDate.getUTCMinutes()}`;
  const seconds = `0${timeDate.getUTCSeconds()}`;
  const dateFormat = `${hours}h${minutes.substr(-2)}min${seconds.substr(-2)}s`;

  return dateFormat;
}

module.exports = timeTampsToDates;
