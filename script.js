class amenaker {
    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = id;
        this.energy = 8
       this.directons = [
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
            [this.x - 1, this.y]
            [this.x, this.y]
            [this.x + 1, this.y]
            [this.x - 1, this.y - 1]
            [this.x, this.y - 1]
            [this.x + 1, this.y - 1]
        ]
    }
    choosecell(character){ 
        var found=[];
        this.getnewdirections();
       
        for (var i  in this.directons) {
            var x =this.directons[i][0];
            var y= this.directons[i][1];
            if (x>=0 && x<= matrix[0].length && y>=0 && y<= matrix.length) {
                if (matrix[y][x]==character) {
                    found.push(this.directons[i])
                }
            }
            
        }

    }
    getnewdirections(){
        this.directons = [
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
            [this.x - 1, this.y]
            [this.x, this.y]
            [this.x + 1, this.y]
            [this.x - 1, this.y - 1]
            [this.x, this.y - 1]
            [this.x + 1, this.y - 1]
        ]
    }

}