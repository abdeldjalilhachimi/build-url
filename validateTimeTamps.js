function validateTimeTamps(array) {
  return array
    .filter((item) => typeof item === "number" && item > 0)
    .sort((a, b) => {
      return a - b;
    });
}

module.exports = validateTimeTamps;
