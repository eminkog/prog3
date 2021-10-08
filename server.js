var express = require('express');
var random = require('./classes1/random');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs')

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
GrassEater = require("./classes1/GarssEater")
Mard = require("./classes1/Mard")
Gishatich = require("./classes1/Gishatich")
Alleater = require("./classes1/Alleater")
Sermnacan = require("./classes1/Sermnacan")
leavingcreature = require("./classes1/leavingcreauture");
grasscount = 0
grasseatercount = 0
gishatichcount = 0
mardcount = 0
alleatercount = 0
sermnacancount = 0
wheather = "winter"



function changeweather() {

    if (wheather == "winter") {
        wheather = "spring"

    }
    else if (wheather == "spring") {
        wheather = "summer"

    }
    else if (wheather == "summer") {
        wheather = "authumn"

    }
    else if (wheather == "authumn") {
        wheather = "winter"

    }
    io.sockets.emit("wheath", wheather)


}
setInterval(changeweather, 7000)

function generateMatrix() {
    for (let y = 0; y < 20; y++) {
        matrix[y] = []
        for (let x = 0; x < 20; x++) {
            var numbers = [0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,4,4,4,5,5,6,6]
            var elemante = random(numbers)
            matrix[y][x] = elemante

        }

    }
    return matrix


}
setTimeout(generateMatrix,7000)


function createobject() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var g = new Grass(x, y, 1)
                grasscount++
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

    io.sockets.emit("data", senddata)

}

function addgrasscount() {
    grasscount = grassArr.length
    io.sockets.emit("hashiv_grass", grasscount)
}
function addgishatichcount() {
    gishatichcount = gishatichArr.length
    io.sockets.emit("hashiv_gishatich", gishatichcount)
}
function addgrasseatercount() {
    grasseatercount = grassEaterArr.length
    io.sockets.emit("hashiv_grasseater", grasseatercount)
}
function addalleatercount() {
    alleatercount = alleaterArr.length
    io.sockets.emit("hashiv_alleater", alleatercount)
}
function addmardcount() {
    mardcount = mardArr.length
    io.sockets.emit("hashiv_mard", mardcount)
}
function addsermnacancount() {
    sermnacancount = sermncanArr.length
    io.sockets.emit("hashiv_serm", sermnacancount)
}
setInterval(addsermnacancount, 1000)


setInterval(addmardcount, 1000)


setInterval(addalleatercount, 1000)


setInterval(addgrasseatercount, 1000)


setInterval(addgishatichcount, 1000)


setInterval(addgrasscount, 1000)

function game() {
    // grass start
    if (wheather == "winter") {
        setTimeout(function () {
            for (let i in grassArr) {
                grassArr[i].mul()

            }
        }, 5000)
    }
    else{
        for (let i1 in grassArr) {
            grassArr[i1].mul()

        }
    }
     
  
 
  

    //grass end

    for (let i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].eat()

    }
    for (let i = 0; i < gishatichArr.length; i++) {
        gishatichArr[i].eat()

    }
    setTimeout(function () {
        for (let i = 0; i < sermncanArr.length; i++) {
            sermncanArr[i].move()
        }
    }, 2000)
    setTimeout(function () {
        for (let i = 0; i < alleaterArr.length; i++) {
            alleaterArr[i].eat()
        }
    }, 3000)



    for (let i = 0; i < mardArr.length; i++) {
        mardArr[i].eat()

    }
    grasscount = grassArr.length


    io.sockets.emit("data", senddata)
}

setInterval(game, 1000)

function addgrass() {
    for (let i = 0; i < 7; i++) {
        var y = random(matrix.length)
        var x = random(matrix[0].length)
        if (matrix[y][x] == 0) {


            matrix[y][x] = 1
            var g = new Grass(x, y, 1)
            grassArr.push(g)
            grasscount++
            break

        }

    }


    io.sockets.emit("data", senddata)

}





function addgrasseater() {
    for (let i = 0; i < 7; i++) {
        var y = random(matrix.length)
        var x = random(matrix[0].length)
        if (matrix[y][x] == 0) {


            matrix[y][x] = 2
            var ge = new GrassEater(x, y, 2)
            grassEaterArr.push(ge)
            break

        }

    }


    io.sockets.emit("data", senddata)
}

function addalleater() {
    for (let i = 0; i < 7; i++) {
        var y = random(matrix.length)
        var x = random(matrix[0].length)
        if (matrix[y][x] == 0) {


            matrix[y][x] = 4
            var all = new Alleater(x, y, 4)
            alleaterArr.push(all)
            break

        }

    }


    io.sockets.emit("data", senddata)
}

function addmard() {
    for (let i = 0; i < 7; i++) {
        var y = random(matrix.length)
        var x = random(matrix[0].length)
        if (matrix[y][x] == 0) {


            matrix[y][x] = 5
            var mard = new Mard(x, y, 5)
            mardArr.push(mard)
            break

        }

    }


    io.sockets.emit("data", senddata)
}

function addsermnacan() {
    for (let i = 0; i < 7; i++) {
        var y = random(matrix.length)
        var x = random(matrix[0].length)
        if (matrix[y][x] == 0) {


            matrix[y][x] = 6
            var serm = new Sermnacan(x, y, 6)
            sermncanArr.push(serm)
            break

        }

    }


    io.sockets.emit("data", senddata)
}

function addgishatich() {
    for (let i = 0; i < 7; i++) {
        var y = random(matrix.length)
        var x = random(matrix[0].length)
        if (matrix[y][x] == 0) {


            matrix[y][x] = 3
            var gish = new Gishatich(x, y, 3)
            gishatichArr.push(gish)
            break

        }

    }


    io.sockets.emit("data", senddata)
}

function strike() {
    x = random(20)
    y = random(20)



    if (y <= 18 && y > 0 && x <= 18 && x > 0) {
        matrix[y + 1][x - 1] = 0;
        matrix[y + 1][x] = 0;
        matrix[y + 1][x + 1] = 0;
        matrix[y][x - 1] = 0
        matrix[y][x] = 0
        matrix[y][x + 1] = 0
        matrix[y - 1][x - 1] = 0
        matrix[y - 1][x] = 0
        matrix[y - 1][x + 1] = 0

        io.sockets.emit("data", senddata)
    }



}







function kill() {
    grassEaterArr = []
    grassArr = []
    mardArr = []
    sermncanArr = []
    gishatichArr = []
    alleaterArr = []
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
            matrix[y][x] = 0

        }

    }
    io.sockets.emit("data", senddata)
    return matrix

}
function start() {

    createobject()
    io.sockets.emit("data", senddata)
};

let senddata = {
    matrix: matrix,
    grasscount: grasscount,
    wheather: wheather

}

io.sockets.on("click", strike)
io.on('connection', function (socket) {

    socket.on("addgrass", addgrass)
    socket.on("addgrasseater", addgrasseater)
    socket.on("addmard", addmard)
    socket.on("addgishatich", addgishatich)
    socket.on("addalleater", addalleater)
    socket.on("addsermnacan", addsermnacan)
    socket.on("kill", kill)
    socket.on("start", start)
    socket.on("strike", strike)
})
var statistics = {};

setInterval(function() {
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length;
    statistics.alleaterArr = alleaterArr.length;
    statistics.mard = mardArr.length
    statistics.gishatich = gishatichArr.length
    statistics.sermnacan = sermncanArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
        console.log("send");
    })
},1000)