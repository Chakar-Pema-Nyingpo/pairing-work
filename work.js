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
