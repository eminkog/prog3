class Sermnacan {
    constructor(x, y, id) {
        this.x = x
        this.y = y
        this.id = id
        this.energy = 8
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


    chooseCell(character) {
        var found = [];
        this.getNewCoordinates()
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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

        }
        this.die()

    }
    die() {
        if (this.energy <= 0) {
            for (let i = 0; i < sermncanArr.length; i++) {
                if (this.x == sermncanArr[i].x && this.y == sermncanArr[i].y) {
                    sermncanArr.splice(i, 1)
                    break
                }
            }

            matrix[this.y][this.x] = 0
        }
    }
}