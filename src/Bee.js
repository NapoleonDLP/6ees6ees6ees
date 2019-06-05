class Bee extends Grub {
// the Grub superclass
//ES6 style sets the constructor function
constructor (age, color) {
  //invokes the super calls the parent constructor
  //must call super before you can use the keyword this
  super(age, color);
  // an age property that is set to 5
  this.age = 5;
  // a color property that is set to yellow
  this.color = 'yellow';
  // a food property that is inherited from grub
    //inherited so no need to do anything with this

  // a job property that is set to Keep on growing
    //when adding new properties they must be set inside the constructor
  this.job = 'Keep on growing';
}
// an eat method that is inherited from grub
  //inherited no need to do anything


}
