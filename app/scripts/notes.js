/* Strings are not mutable
* Assignment is "by value"
*/

var kepler = "He loves ";
var item = "treats";
var keplerSays = kepler + item;

console.log(keplerSays);  //logs "He loves treats"

function keplerSpeaks(prefix, suffix){
  prefix = prefix + suffix;
  console.log(prefix); //logs "He loves treats"
}

keplerSpeaks(kepler, item); //This call reaches to function above to file data to the arguments "prefix" and "suffix"; in this case the data is var kepler and var item, using globals above.
console.log(kepler);


/**
* Objects data are mutable (can be changed)
* Assignment is "by reference" or "by sharing"
**/

var kepler = {      // This assigns the variable to an object "{...}"
  likes: 'treats'
};
console.log(kepler); //1. logs "kepler likes treats"

function likeSomethingNew(dog){
  dog.likes = 'balls';
  console.log(dog);  //2. log "kepler likes treats"
}

likeSomethingNew(kepler);
console.log(kepler);  //3. logs "kepler likes balls" ... kepler is assigned as an object, therefore it is mutated by the function call


/**
* Objects have properties and methods
**/

function sayHello(){
  console.log('regular function call. This: ', this);  // log shows "this" as undefined, due to strict mode, but base is due to Window Object
}
sayHello();

var kay = {
  name: 'Kay',
  sayHello: function(){
    console.log('method function call. This: ', this); // log shows object for "this" because this is seen through the object propery "sayHello" which calls the value "name: Kay"
    console.log(this.name);  // log here shows just the assigned property value of "name" that "this" has called from "sayHello"
    return 'Woof';
  }
};

kay.sayHello();

console.log('method "hasOwnProperty " is ', kay.hasOwnProperty('name'));


/**
* Constructor function call with the "new" keyword
**/

function Dog(thing) {  // ALWAYS start constructor functions with capital letter (e.g. Dog)
  console.log('Constructor. This: ', this);

  this.height = 'short';

  this.wag = function(thing){
  console.log("Wag ", thing);
  };
}

var oliver = new Dog();
var kepler = new Dog();

oliver.wag('tail');
console.log('Oliver still returns value of ', oliver);
kepler.wag('ears');

kepler.length = 'long';
console.log('Kepler', kepler);
console.log('Oliver', oliver);


/**
* Inheritance
**/
function Truck(){
  this.doors = 2;
  this.bed = true;
}

Truck.prototype.go = function(){  // every object has a prototype, even if not stated in the expression statement. But prototype can then be called for the object to expand the expression. In this case, "go". "go" is a method to look for information
  console.log('vroom');
};

var genericTruck = new Truck();
console.log(genericTruck);
genericTruck.go();

function Dodge(){
  this.engine = 'hemi';
  this.ram = true;
}

Dodge.prototype = new Truck();
console.log(dakota);
var dakota = new Dodge();
console.log(dakota);  // log only shows what "Dodge" assigns to variables ("hemi", "ram") without noting another variable to "dakota" or including another function call to it.


/**
* Assignment
* Challenge code
**/

function Dog(type) {
  type = type || {};
  //console.log('First log: Status for this: ', this);
  this.status = 'normal';
  //console.log('Second log: Status for this: ', this);
  this.color = 'red';

  this.hungry = true;
  if(type.hungry !== undefined) {
    this.hungry = type.hungry;
  }

}

function Human() {
  this.pet = function(kepler){
  kepler.status = 'happy';
};

}
