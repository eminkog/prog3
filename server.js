var Grass = require("./classes1/Grass")
var GrassEater = require("./classes1/GarssEater")
var Mard = require("./classes1/Mard")
var Gishatich = require("./classes1/Gishatich")


var matrix = [];
var sermncanArr = [];
var mardArr = [];
var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var alleaterArr = [];


function generatMatrix(size) {
    var matrix = []
    for (let y = 0; y < size; y++) {
        matrix[y] = []
        for (let x = 0; x < size; x++) {
            var numbers = [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6]
            var elemante = random(numbers)
            matrix[y][x] = elemante

        }

    }
    return matrix
}

function createobject() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var g = new Grass(x, y, 1)
                grassArr.push(g)
            }
            else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y, 2)
                grassEaterArr.push(ge)
            }
            else if (matrix[y][x] == 3) {
                var gee = new Gishatich(x, y, 3)
                gishatichArr.push(gee)
            }
            else if (matrix[y][x] == 4) {
                var all = new Alleater(x, y, 4)
                alleaterArr.push(all)
            }
            else if (matrix[y][x] == 5) {
                var mard = new Mard(x, y, 5)
                mardArr.push(mard)
            }
            else if (matrix[y][x] == 6) {
                var sermnacan = new Sermnacan(x, y, 6)
                sermncanArr.push(sermnacan)
            }
            else {

            }

        }

    }



}

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(3000, function () {
    console.log("Example is running on port 3000");
})

function game() {
}
for (let i = 0; i < grassArr.length; i++) {
    grassArr[i].mul()

}
for (let i = 0; i < grassEaterArr.length; i++) {
    grassEaterArr[i].eat()

}
for (let i = 0; i < gishatichArr.length; i++) {
    gishatichArr[i].eat()

}
setTimeout("for (let i = 0; i < alleaterArr.length; i++) {alleaterArr[i].eat()}", 5000)
setTimeout("for (let i = 0; i < sermncanArr.length; i++) {sermncanArr[i].move()}", 3000)

for (let i = 0; i < mardArr.length; i++) {
    mardArr[i].eat()

}