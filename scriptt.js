

var socket = io()
let td = document.getElementById("grassCount")
let td1 = document.getElementById("gishatichcount")
let td2 = document.getElementById("grassEaterCount")
let td3 = document.getElementById("alleatercount")
let td4 = document.getElementById("mardcount")
let td5 = document.getElementById("sermnacancount")
function setup() {
	side = 30

	createCanvas(20 * side, 20 * side)
	background("black")
}
socket.on("wheath", function (data) {
	w = data

})
socket.on("hashiv_grass", function (data) {
	grasscount = data

})
socket.on("hashiv_gishatich", function (data) {
	gishatichcount = data
})
socket.on("hashiv_grasseater", function (data) {
	grasseatercount = data
})
socket.on("hashiv_alleater", function (data) {
	alleatercount = data
})
socket.on("hashiv_mard", function (data) {
	mardcount = data
})
socket.on("hashiv_serm", function (data) {
	sermnacancount = data
})



function nkarel(data) {


	td.innerText = grasscount
	td1.innerText = gishatichcount
	td2.innerText = grasseatercount
	td3.innerText = alleatercount
	td4.innerText = mardcount
	td5.innerText = sermnacancount

	for (var y = 0; y < 20; y++) {
		for (var x = 0; x < 20; x++) {
			console.log(data.matrix);
			var obj = data.matrix[y][x]
			// grass start
			if (obj == 1) {

				if (w == "winter") {
					fill("white")
				}
				else if (w == "spring") {
					fill("#B5FF33")
				}
				else if (w == "summer") {
					fill("green")
				}
				else if (w == "authumn") {
					fill("#FFBB33")
				}
			}
			//grass end

			else if (obj == 2) {
				fill("yellow")
			}
			if (obj == 3) {

				if (w == "winter") {
					fill("#D3D2D0")
				}
				if (w != "winter") {
					fill("red")
				}

			}
			else if (obj == 4) {
				fill("blue")
			}
			else if (obj == 5) {

				fill('#BA4A00')
			}
			else if (obj == 6) {
				fill('purple')
			}
			else if (obj == 0) {
				fill("grey")
			}
			rect(x * side, y * side, side, side)

		}


	}




}


socket.on("data", nkarel)

function addgrass() {
	socket.emit("addgrass", function () {
		console.log("click");

	})
}
function addgrasseater() {
	socket.emit("addgrasseater", function () {
		console.log("click");

	})
}
function addmard() {
	socket.emit("addmard", function () {
		console.log("click");

	})
}
function addgishatich() {
	socket.emit("addgishatich", function () {
		console.log("click");

	})
}
function addalleater() {
	socket.emit("addalleater", function () {
		console.log("click");

	})
}
function addsermnacan() {
	socket.emit("addsermnacan", function () {
		console.log("click");

	})
}
function kill() {
	socket.emit("kill", function () {
		console.log("click");

	})
}
function start() {
	socket.emit("start", function () {
		console.log("click");

	})
}

function strike() {
	socket.emit("strike", function () {
	console.log("click")
	})
}