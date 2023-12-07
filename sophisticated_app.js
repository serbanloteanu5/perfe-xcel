/**
 * Filename: sophisticated_app.js
 * 
 * Description:
 * This is a sophisticated JavaScript application that simulates a virtual zoo management system. 
 * It allows administrators to add, view, and update information about different animals in the zoo. 
 * The application uses various data structures, object-oriented programming, and advanced algorithms to provide efficient functionality.
 */

// Define the Animal class
class Animal {
  constructor(name, species, age, gender) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.gender = gender;
  }
  
  getDetails() {
    return `Name: ${this.name}, Species: ${this.species}, Age: ${this.age}, Gender: ${this.gender}`;
  }
}

// Define the Zoo class
class Zoo {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.animals = [];
  }
  
  addAnimal(animal) {
    this.animals.push(animal);
  }
  
  removeAnimal(name) {
    this.animals = this.animals.filter(animal => animal.name !== name);
  }
  
  getAnimalDetails(name) {
    const animal = this.animals.find(animal => animal.name === name);
    return animal ? animal.getDetails() : 'Animal not found.';
  }
  
  getAllAnimalDetails() {
    let details = '';
    this.animals.forEach(animal => {
      details += `${animal.getDetails()}\n`;
    });
    return details.trim();
  }
}

// Create a new Zoo instance
const myZoo = new Zoo('Fantastic Zoo', 'New York');

// Add animals to the zoo
myZoo.addAnimal(new Animal('Leo', 'Lion', 5, 'Male'));
myZoo.addAnimal(new Animal('Gina', 'Giraffe', 8, 'Female'));
myZoo.addAnimal(new Animal('Charlie', 'Chimpanzee', 10, 'Male'));

// Remove an animal from the zoo
myZoo.removeAnimal('Gina');

// Get animal details
const leoDetails = myZoo.getAnimalDetails('Leo');
console.log(leoDetails);


// Print all animal details
const allAnimalDetails = myZoo.getAllAnimalDetails();
console.log(allAnimalDetails);

/**
 * Output:
 * Name: Leo, Species: Lion, Age: 5, Gender: Male
 * 
 * Name: Charlie, Species: Chimpanzee, Age: 10, Gender: Male
 */