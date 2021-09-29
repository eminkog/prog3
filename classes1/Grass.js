var leavingcreature = require("./leavingcreauture")



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