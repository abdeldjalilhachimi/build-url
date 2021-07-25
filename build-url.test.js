const validateTimeTamps = require("./validateTimeTamps");
const findMedian = require("./findMedian");
const timeTampsToDates = require("./timeTampsToDates");
const buildUrl = require("./build-url");

// build url
test(" build url  ", () => {
  const data = {
    name: "foo",
    timestamps: [1508349990, 1508350000, 1508357300],
  };
  expect(buildUrl(data)).toBe(
    "https://server/record?name=foo&duration=2h01min50s&median=0h00min10s"
  );
});

// vValid timetamps
test(" validate an array and check if the output are number and sort them ", () => {
  let timeTamps = [1, 80, 10, "2", 5, 3, "hi"];
  expect(validateTimeTamps(timeTamps)).toEqual([1, 3, 5, 10, 80]);
});

// find Median
test(" find the median  ", () => {
  let timeTamps = [1, 3, 4, 5, 8];
  expect(findMedian(timeTamps)).toBe(4);
});

// Timetamps Date Fromat

test(" Fromat timetamps to date human readable   ", () => {
  let timeTamps = 1508349990;
  expect(timeTampsToDates(timeTamps)).toBe("18h06min30s");
});
