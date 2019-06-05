// extends Bee
class HoneyMakerBee extends Bee {
  // TODO..
  //ES6 uses the constructor and calls super
// the Bee superclass
constructor () {
  super();
  // an age property that is set to 10
  this.age = 10;
  // a job property that is set to make honey
  this.job = 'make honey';
  // a color property inherited from bee that is set to yellow
    //no need to adjust if it is inherited
  // a food property that is inherited from grub
    //no need to adjust if it is inherited
  // a honeyPot property that is set to 0
  this.honeyPot = 0;
}

// an eat method that is inherited from grub
  //no need to adjust if it is inherited

// a makeHoney method that adds 1 to that honeyBee's honeyPot
makeHoney() {
  this.honeyPot++;
}
// a giveHoney method that subtracts 1 from that honeyBee's honeyPot
giveHoney() {
  this.honeyPot--;
}
};
