var leavingcreature = require("./leavingcreauture")
var random = require("./random")



module.exports=class Sermnacan extends leavingcreature {
    constructor(x, y, id) {
    super(x,y,id)
        this.energy = 8
    
    }


    chooseCell(character) {
        
        this.getNewCoordinates();
        return super.chooseCell(character);
    
    }
    getNewCoordinates() {
        this.directions = [
            [this.x, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
        ]
    }

    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.energy > 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            var g = new Grass(newX, newY, 1)
            grassArr.push(g)

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy -= 8;

        }else if(!newCell){
            for (let i = 0; i < sermncanArr.length; i++) {
                if (this.x == sermncanArr[i].x && this.y == sermncanArr[i].y) {
                    sermncanArr.splice(i, 1)
                    break
                }
            }

            matrix[this.y][this.x] = 0
            return matrix
        }
        this.die()

    }
    die() {
    return super.die(sermncanArr)
    }
}