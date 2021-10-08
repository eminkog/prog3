var leavingcreature = require("./leavingcreauture")
var random = require("./random")



module.exports = class Mard extends leavingcreature {
    constructor(x, y, id) {
        super(x, y, id)
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
        return super.mul(Mard, mardArr, 5)

    }

    move() {
        return super.move(mardArr)

    }


    eat() {
  return super.eat(3,gishatichArr)
    }


    die() {
 return super.die(mardArr)
    }
}


