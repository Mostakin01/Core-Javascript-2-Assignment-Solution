// Create an object named calculator with methods add, subtract, and multiply.
var calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  }
};

// Implement the calculate method in the calculator object, which takes an operation ('add', 'subtract', or 
// 'multiply') and two numbers.
calculator.calculate = function(operation, a, b) {
  // check if the operation is valid
  if (this[operation]) {
    // call the corresponding method with the numbers
    return this.operation;
  } else {
    // return an error message
    return "Invalid operation";
  }
};

// Use call to perform an addition operation using the calculate method.
console.log(calculator.calculate.call(calculator, "add", 10, 20)); // 30

// Use apply to perform a multiplication operation using the calculate method with arguments as an array.
console.log(calculator.calculate.apply(calculator, ["multiply", 5, 6])); // 30

// Create another object named discountCalculator with a discount percentage property and a method 
// applyDiscount.
var discountCalculator = {
  discount: 0.1, // 10% discount
  applyDiscount: function(price) {
    // calculate the discounted price
    return price * (1 - this.discount);
  }
};

// Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and 
// can be reused.
var calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator);
console.log(calculateDiscount(100)); // 90
