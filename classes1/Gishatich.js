var leavingcreature = require("./leavingcreauture")
var random = require("./random")



module.exports=class Gishatich extends leavingcreature {
    constructor(x, y, id) {
     super(x,y,id);
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
return super.mul()

    }


    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.energy > 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy--;

        }
        this.die()

    }


    eat() {
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);

        if (newCell && this.energy >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy++;

            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.mul()

        } else {
            this.move()
        }

    }


    die() {
        if (this.energy <= 0) {
            for (let i = 0; i < gishatichArr.length; i++) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1)
                    break
                }
            }

            matrix[this.y][this.x] = 0
        }
    }
}
