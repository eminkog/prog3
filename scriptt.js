var socket = io()



function setup() {
	 side = 20
	createCanvas(5 * side, 5 * side)
	background("black")
}

	function nkarel(matrix) {
		console.log(matrix);
		for (var y = 0; y < 5; y++) {
			for (var x = 0; x < 5; x++) {

				var obj = matrix[y][x]
				if (obj == 0) {
					fill("grey")
				}
				else if (obj == 2) {
					fill("yellow")
				}
				else if (obj == 3) {
					fill("red")
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
				else if(obj == 1){
					fill("green")
				}
				rect(x * side, y * side, side, side)

			}


		}



	
	}


	socket.on("data", nkarel)
	
	function addgrass() {
		socket.emit("addgrass")
	}
	function generatematrix() {
		socket.emit("generatematrix")
	}
	function createobject() {
		socket.emit("createobject")
	}
