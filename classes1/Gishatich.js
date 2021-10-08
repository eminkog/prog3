var leavingcreature = require("./leavingcreauture")
var random = require("./random")



module.exports = class Gishatich extends leavingcreature {
    constructor(x, y, id) {
        super(x, y, id);
        this.energy = 8;


    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);

    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    mul() {
        return super.mul(Gishatich, gishatichArr, 3)

    }


    move() {
        return super.move(gishatichArr)
    }


    eat() {
  return super.eat(2,grassEaterArr)

    }


    die() {
    return super.die(gishatichArr)
    }
}
