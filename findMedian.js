function findMedian(array) {
  const mid = Math.ceil(array.length / 2);
  const median =
    array.length % 2 == 0
      ? Math.floor((array[mid] + array[mid - 1]) / 2)
      : array[mid - 1];

  return median;
}

module.exports = findMedian;
