// create a Map to store contact information
let contacts = new Map();

contacts.set("Ayub", {age: 25, email: "ayub@gmail.com", location: "Kolkata"});
contacts.set("Salahuddin", {age: 30, email: "Salahuddin@gmail.com", location: "Siliguri"});
contacts.set("Kasim", {age: 35, email: "kasim@gmail.com", location: "Malda"});

// implement a function to retrieve contact details by name
function getContact(name) {
  // check if the name exists in the Map
  if (contacts.has(name)) {
    // return the value associated with the name
    return contacts.get(name);
  } else {
  return "No contact found with that name.";
  }
}
console.log(getContact("Ayub"));
console.log(getContact("Salahuddin")); 
console.log(getContact("Kasim")); 
