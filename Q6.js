// Create a simple JavaScript function named displayInfo that takes two parameters (name and role) and 
// logs a message

function displayInfo(name, role) {
    console.log("My name is " + name + " and I am a " + role + ".");
  }
// Use call to invoke the displayInfo function with specific arguments.
  displayInfo.call(null, "Ayub", "teacher");

    // Use apply to invoke the displayInfo function with arguments passed as an array.
  displayInfo.apply(null, ["Kasim", "student"]);

  // Use apply to invoke the displayInfo function with arguments passed as an array.
  // Create another function named greet that logs a greeting with this context.
  function greet() {
    console.log("Hello, " + this.name + "!");
  }
  // Use bind to create a new function boundGreet with a specific context and log the greeting.
  var boundGreet = greet.bind({name: "Salahuddin"});
  boundGreet();
  