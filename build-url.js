const data = {
  name: "foo",
  timestamps: [1508349990, 1508350000, 1508357300],
};

function timeTampsToDates(duration) {
  let timeDate = new Date(duration * 1000);
  const hours = timeDate.getUTCHours();
  const minutes = `0${timeDate.getUTCMinutes()}`;
  const seconds = `0${timeDate.getUTCSeconds()}`;
  const dateFormat = `${hours}h${minutes.substr(-2)}min${seconds.substr(-2)}s`;

  return dateFormat;
}
function findMedian(array) {
  const mid = Math.ceil(array.length / 2);
  const median =
    array.length % 2 == 0
      ? Math.floor((array[mid] + array[mid - 1]) / 2)
      : array[mid - 1];

  return median;
}

function validateTimeTamps(array) {
  return array
    .filter((item) => typeof item === "number" && item > 0)
    .sort((a, b) => {
      return a - b;
    });
}

function buildUrl({ name, timestamps }) {
  const validTimeTamps = validateTimeTamps(timestamps);
  const duration =
    validTimeTamps[validTimeTamps.length - 1] - validTimeTamps[0];
  const fortmateDuaration = timeTampsToDates(duration);
  const median = findMedian(validTimeTamps);
  const medianFormatDate = timeTampsToDates(median - validTimeTamps[0]);
  const url = `https://server/record?name=${name}&duration=${fortmateDuaration}&median=${medianFormatDate}`;

  return url;
}

buildUrl(data);

module.exports = buildUrl;
