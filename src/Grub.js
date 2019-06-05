class Grub {
  //ES6 uses the constructor method to pass in these properties
constructor () {
  //an age property that is set to 0
  this.age = 0;
  // a color property that is set to pink
  this.color = 'pink';
  // a food property that is set to jelly
  this.food = 'jelly';
}

//ES6 sets these properties in a different style
// an eat method that returns 'Mmmmmmmmm jelly'
eat () {
  return `Mmmmmmmmm ${this.food}`
}
};
