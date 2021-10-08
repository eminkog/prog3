var random = require("./random")
module.exports = class leavingcreature {
    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
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

    chooseCell(character) {
        var found = [];
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

    mul(character, characterarr, id) {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);


        if (newCell && this.energy >= 12) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;

            var newcharater = new character(newX, newY, id);
            characterarr.push(newcharater);
            this.energy = 8;

        }

    }
    move(characterarr) {
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

        } else if (!newCell) {
            for (let i = 0; i < characterarr.length; i++) {
                if (this.x == characterarr[i].x && this.y == characterarr[i].y) {
                    characterarr.splice(i, 1)
                    break
                }
            }

            matrix[this.y][this.x] = 0
            return matrix
        }
        this.die()

    }
    eat(id , characterarr) {
        var emptyCells = this.chooseCell(id);
        var newCell = random(emptyCells);

        if (newCell && this.energy >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = this.id;

            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            this.energy++

            for (var i in characterarr) {
                if (newX == characterarr[i].x && newY == characterarr[i].y) {
                    characterarr.splice(i, 1);
                    break;
                }
            }
            this.mul()

        } else {
            this.move()
        }

    }
    die(characterarr) {
        if (this.energy <= 0) {
            for (let i = 0; i < characterarr.length; i++) {
                if (this.x == characterarr[i].x && this.y == characterarr[i].y) {
                    characterarr.splice(i, 1)
                    break
                }
            }

            matrix[this.y][this.x] = 0
        }
    }
}

