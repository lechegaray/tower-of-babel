class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  getx() {
    return this.x;
  }
  setx(x) {
    this.x = x;
  }
  gety() {
    return this.x;
  }
  sety(y) {
    this.y = y;
  }
  getHealth_(){
    return this.health_;
  }
  setHealth_(health_){
    this.health_ = health_;
  }
  damage(){
    this.health_ = this.health_ - 10;
  }
  toString(){
    return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth_();
  }

}

var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
