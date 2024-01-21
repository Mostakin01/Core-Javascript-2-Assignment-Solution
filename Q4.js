// create two objects person and person2 with properties name and age
let person1 = {
    name: "Ayub",
    age: 25,
  }
  
  let person2 = {
    name: "Kasim",
    age: 30,
  }
    // use the template literal syntax to create a string with variables
    function introduce() {
        console.log("Hello, I'm " + this.name + ", and I'm " + this.age + " years old.");
      }

  introduce.call(person2);
