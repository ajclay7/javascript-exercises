const add = function (x, y) {
	return x + y;
};

const subtract = function (x, y) {
	return x - y;
};

const sum = function (nums) {
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
	}

	return sum;
};

const multiply = function (nums) {
	let result = nums[0] * nums[1];

	if (nums.length >= 3) {
		for (let i = 2; i < nums.length; i++) {
			result *= nums[i];
		}
	}

	return result;
};

const power = function (num, power) {
	let result = num;

	for (let i = 1; i < power; i++) {
		result *= num;
	}

	return result;
};

const factorial = function (num) {
	if (num === 0 || num === 1) {
		return 1;
	} else {
		for (let i = num - 1; i > 0; i--) {
			num *= i;
		}

		return num;
	}
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
