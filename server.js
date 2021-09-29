

var express = require('express');
const random = require('./classes1/random');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000, function () {
    console.log("Example is running on port 3000");
})
  matrix = [];
  sermncanArr = [];
  mardArr = [];
  grassArr = [];
  grassEaterArr = [];
  gishatichArr = [];
  alleaterArr = [];

Grass = require("./classes1/Grass")
var GrassEater = require("./classes1/GarssEater")
var Mard = require("./classes1/Mard")
var Gishatich = require("./classes1/Gishatich")
var Alleater = require("./classes1/Alleater")
var Sermnacan = require("./classes1/Sermnacan")
var leavingcreature = require("./classes1/leavingcreauture");
var grasscount = 0



function generateMatrix() {
    for (let y = 0; y < 10; y++) {
        matrix[y] = []
        for (let x = 0; x < 10; x++) {
            var numbers = 0
            //var elemante = numbers
            matrix[y][x] = numbers

        }

    }
    io.sockets.emit("data", matrix)


}
generateMatrix()

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

    io.sockets.emit("data", matrix)

}

function game() {

    for (let i in grassArr) {
        grassArr[i].mul()

    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].eat()

    }
    for (let i = 0; i < gishatichArr.length; i++) {
        gishatichArr[i].eat()

    }
    setTimeout(function () {
        for (let i = 0; i < alleaterArr.length; i++) {
            alleaterArr[i].eat()
        }
    }, 3000)

    for (let i = 0; i < sermncanArr.length; i++) {
        sermncanArr[i].move()
    }

    for (let i = 0; i < mardArr.length; i++) {
        mardArr[i].eat()

    }
    io.sockets.emit("data", matrix)
}
setInterval(game, 1000)

function addgrass() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) { 
            if (matrix[y][x] == 0) {
               console.log(y);
                matrix[y][x] = 1
                var g = new Grass(y, x, 1)
                grassArr.push(g)
                break;
            }

        }

    }
   
    io.sockets.emit("data", matrix)

}


function addgrasseater() {
    for (let y = 0; i < matrix.length; i++) {
        for (let x = 0; j < matrix[0].length; j++) {
            if (matrix[y][x] == 1) {
                var GrassEater = GrassEater(x, y, 2)
                grassEaterArr.push(GrassEater)
            }

        }

    }
    io.sockets.emit("data", matrix)
}

function addalleater() {
    for (let y = 0; i < matrix.length; i++) {
        for (let x = 0; j < matrix[0].length; j++) {
            if (matrix[y][x] == 1) {
                var Alleater = Alleater(x, y, 4)
                alleaterArr.push(Alleater)
            }

        }

    }
    io.sockets.emit("data", matrix)
}

function addmard() {
    for (let y = 0; i < matrix.length; i++) {
        for (let x = 0; j < matrix[0].length; j++) {
            if (matrix[y][x] == 1) {
                var Mard = Mard(x, y, 1)
                mardArr.push(Mard)
            }

        }

    }
    io.sockets.emit("data", matrix)
}

function addsermnacan() {
    for (let y = 0; i < matrix.length; i++) {
        for (let x = 0; j < matrix[0].length; j++) {
            if (matrix[y][x] == 1) {
                var Sermnacan = Sermnacan(x, y, 1)
                mardArr.push(Sermnacan)
            }

        }

    }
    io.sockets.emit("data", matrix)
}

function addgishatich() {
    for (let y = 0; i < matrix.length; i++) {
        for (let x = 0; j < matrix[0].length; j++) {
            if (matrix[y][x] == 1) {
                var Gishatich = Gishatich(x, y, 1)
                mardArr.push(Gishatich)
            }

        }

    }
    io.sockets.emit("data", matrix)
}

function strike(evt) {
    var randomarr = [
        [matrix[x][y - 2] = 0]
        [matrix[x - 1][y - 2] = 0]
        [matrix[x + 1][y - 2] = 0]
        [matrix[x + 2][y - 1] = 0]
        [matrix[x + 2][y] = 0]
        [matrix[x + 2][y + 1] = 0]
        [matrix[x + 1][y + 2] = 0]
        [matrix[x][y + 2] = 0]
        [matrix[x - 1][y + 2] = 0]
        [matrix[x - 2][y + 1] = 0]
        [matrix[x - 2][y] = 0]
        [matrix[x - 2][y - 1] = 0]
    ]
    var place = random(randomarr)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix.length; x++) {
            if (matrix[y][x] == place[0][1]) {
                matrix[x][y - 2] = 0
                matrix[x - 1][y - 2] = 0
                matrix[x + 1][y - 2] = 0
                matrix[x + 2][y - 1] = 0
                matrix[x + 2][y] = 0
                matrix[x + 2][y + 1] = 0
                matrix[x + 1][y + 2] = 0
                matrix[x][y + 2] = 0
                matrix[x - 1][y + 2] = 0
                matrix[x - 2][y + 1] = 0
                matrix[x - 2][y] = 0
                matrix[x - 2][y - 1] = 0
            }

        }

    }

io.sockets.emit("data",matrix)
}




io.sockets.on("click", strike)
io.on('connection', function (socket) {
    createobject()
    socket.on("addgrass", addgrass)
})