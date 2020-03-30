'use strict';
/*Requirements
1. Create an “Animal” class with a speak method that console logs the 
sound property and a sayName method that console logs the name property.
2. Create a “Dog” class that extends the animal class and has a sound 
property and a name property and takes both name and sound as parameters 
to its constructor.
3. Create a new object using the Dog class with a name and voice.
4. Log the new dog object to the console.
5. Call the speak method on the dog object.
6. Add a getter and a setter for the name property.
7. Call set the name property to a new value.
8. Log to the console the name property*/

class Animal{
    constructor(name, sound){
        this._name = name;
        this._sound = sound;
    }

    speak(){
        console.log(`Speak: ${this._sound}`);
    }

    sayName(){
        console.log(`My name is: ${this._name}`);
    }
}

class Dog extends Animal{
    constructor(name, sound){
        super(name, sound);
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }
}

let doggo = new Dog("Doggo", "Woof!");
console.log(doggo);
doggo.speak();
doggo.name = "Good Boy";
console.log(`Dog's new name: ${doggo.name}`);

