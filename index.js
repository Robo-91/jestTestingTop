const capitalize = (str) => {
	let firstLetter = str[0];
	firstLetter = firstLetter.toUpperCase();
	str = str.slice(1);
	return firstLetter + str;
};

const reverseString = (str) => {
	return str.split("").reverse().join("");
};

const calculator = {
	sum(a, b) {
		return a + b;
	},
	subtract(a, b) {
		return a - b;
	},
	multiply(a, b) {
		return a * b;
	},
	divide(a, b) {
		return a / b;
	},
};

module.exports = { capitalize, reverseString, calculator };
