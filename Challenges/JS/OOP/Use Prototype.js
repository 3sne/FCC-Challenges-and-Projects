function Dog(name) {

  //protos:
  Dog.prototype.numLegs = 4;
  /* NOTE: I can't do "this.prototype.numLegs" because that statement will "literally" try to create "prototype" property
  for the constructed object. But, the goal of prototype object is to make a property available to all instances of the
  constructor without having to create dupe properties in all of them. Rather, all the instances can refer to the constructor
  defined prototype object, which contain single instance of these potentially dupe properties. So, Dog.prototype is appropriate way to convey
  that prototype object is not linked to just "this" instance.  */


  //properties:
  this.name = name;


  //methods:

}


let beagle = new Dog("Snoopy");

console.log(beagle);