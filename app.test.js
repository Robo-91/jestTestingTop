const { TestScheduler } = require("jest");
const { capitalize, reverseString, calculator } = require(".");

test("Capitalize the first letter in the string", () => {
	expect(capitalize("hello")).toBe("Hello");
});

test("Reverse a given string", () => {
	expect(reverseString("robert")).toBe("trebor");
});

test("Reverse a given string", () => {
	expect(reverseString("racecar")).toBe("racecar");
});

test("Adds 2 numbers", () => {
	expect(calculator.sum(1, 2)).toBe(3);
});

test("Subtracts 2 numbers", () => {
	expect(calculator.subtract(2, 2)).toBe(0);
});

test("Multiplies 2 numbers", () => {
	expect(calculator.multiply(6, 2)).toBe(12);
});

test("Divides 2 numbers", () => {
	expect(calculator.divide(12, 2)).toBe(6);
});
