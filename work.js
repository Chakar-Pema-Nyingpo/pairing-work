function sum(num) {
  return num + num;
}

// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
function AddTwoLowest(number) {
  const sortNumber = number.sort((a, b) => a - b);
  const lowsetOne = sortNumber[0];
  const lowsetTwo = sortNumber[1];
  const sum = lowsetOne + lowsetTwo;

  return sum;
}
// console.log(AddTwoLowest([1,8,9,6,4]))

// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
function numToString(num) {
  return num.toString();
}
// console.log(numToString(123));

// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const maxDistancePossible = mpg * fuelLeft;
  return maxDistancePossible >= distanceToPump;
};
// console.log(zeroFuel(50, 25, 2));

// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
function getMiddle(s) {
  const length = s.length;
  if (length % 2 === 0) {
    const mid1 = length / 2 - 1;
    const mid2 = length / 2;
    const m = [];
    return s[mid1] + s[mid2];
  } else {
    const mid = Math.floor(length / 2);
    return s[mid];
  }
}
// console.log(getMiddle("este"));

// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};
// console.log(summation(3));
