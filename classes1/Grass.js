var leavingcreature = require("./classes1/leavingcreature.js")
var random = require("./classes1/random.js")



module.exports= class Grass extends leavingcreature{
    constructor(x, y, id) {
        super(x,y,id);
        this.multiply = 0;

    };
    chooseCell(character) {
    return super.chooseCell(character)
    }
 

    mul () {
       return super.mul();
    }
 

} 