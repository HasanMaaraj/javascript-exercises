const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	let ans = 0;
  for (let number of numbers) {
    ans += number;
  }
  return ans;
};

const multiply = function(numbers) {
  let ans = 1;
  for (let number of numbers) {
    ans *= number;
  }
  return ans;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
  ans = 1;
  for (let i = n; i > 0; i--) {
    ans *= i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
