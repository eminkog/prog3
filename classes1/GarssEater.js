var leavingcreature = require("./classes1/leavingcreature.js")
var random = require("./classes1/random.js")



module.exports=class GrassEater extends leavingcreature {
    constructor(x, y, id) {
     super(x,y,id)
        this.energy = 8;
   

    }
    chooseCell(character) {
        
        this.getNewCoordinates();
        return super.chooseCell(character)
    
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
return super.mul();
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
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);

        if (newCell && this.energy >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy++;

            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
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
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break
                }
            }

            matrix[this.y][this.x] = 0
        }
    }
}


