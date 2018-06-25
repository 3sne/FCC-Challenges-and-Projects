function Dog(name) {
    this.name = name;
  }

  Dog.prototype = {
    // Add your code below this line
    numLegs: 4,
    eat: () => {console.log('noom');},
    describe: () => {console.log('My name is ' + this.name);}
  };

  /* Although we add multiple props to prototype of object constructed by Dog, it becomes unassigned from the previous original auto-generated prototype object, which has the properties like constructor and hasOwnProperty()
    whereas individual property assignment   to Dog.prototype would preserve the auto-generated stuff.*/

  let bhaw = new Dog('bhaw');
  let cho = new Dog('cho');
  console.log(bhaw);
  console.log(cho);
