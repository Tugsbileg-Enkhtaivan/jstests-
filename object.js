// Create an object literal representing a person with properties for name, age, and city.

// const person = {
//     name: "Tugsbileg",
//     age: 21,
//     city: "Ulaanbaatar"
// };

// Create an object using the new Object() constructor. 

const person = new Object();

person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// Create an object using a constructor function.

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

// Access and display the values of properties using dot notation and bracket notation.

console.log(person.firstName)

console.log(person["firstName"])

// Practice accessing nested properties (objects within objects).

const object1 = {
    object2: {
        name: "Tugsbileg",
        contact: {
            email: "tugsbileg2003@gmail.com",
            phone: "90141290"
        }
    }
};

console.log(object1.object2.contact.email); 

console.log(object1["object2"]["contact"]["phone"]);

// Add a new property to an existing object. 

person.height = 182

console.log(person.height)

person["weight"] = "90"

console.log(person["weight"])

// Modify the value of an existing property. 

person.firstName = "BilegTugs"

console.log(person["firstName"])

person["age"] = 21

console.log(person.age)

// Delete a property from an object. 

delete person.lastName 

console.log(person)

// Add a method to an object that performs a specific action (e.g., a greet() method for a person object). 

person.greet = function(){
    
}

// Call and execute methods on objects.

Object.keys() 
Object.values()
console.table()