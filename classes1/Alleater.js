var leavingcreature = require("./leavingcreauture")
var random = require("./random")


module.exports=class Alleater extends leavingcreature {
    constructor(x, y, id) {
     super(x,y,id)
        this.energy = 8
      

    }
    chooseCell() {
        var found = [];
        this.getNewCoordinates()
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                found.push(this.directions[i]);
            }
        }
        return found;

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
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


        if (newCell && this.energy >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;

            var newalleater = new Alleater(newX, newY, 4);
            alleaterArr.push(newalleater);
            this.energy = 8;

        }

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
        var emptyCells = this.chooseCell();
        var newCell = random(emptyCells);

        if (newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy--

            for (let i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (let i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (let i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
            for (let i in mardArr) {
                if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
                    mardArr.splice(i, 1);
                    break;
                }
            }
            for (let i in sermncanArr) {
                if (this.x == sermncanArr[i].x && this.y == sermncanArr[i].y) {
                    sermncanArr.splice(i, 1);
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
            for (let i = 0; i < alleaterArr.length; i++) {
                if (this.x == alleaterArr[i].x && this.y == alleaterArr[i].y) {
                    alleaterArr.splice(i, 1)
                    break
                }
            }

            matrix[this.y][this.x] = 0
        }
    }
}