class Vec {
    constructor(x,y){
        this.x=x;
        this.y=y;
        return this
    }
    plus(newVec){
        return new Vec(this.x+newVec.x,this.y+newVec.y)
    }
    minus(newVec){
        return new Vec(this.x-newVec.x,this.y-newVec.y)
    }
    get length(){
        return (Math.sqrt(this.x**2+this.y**2))
    }
}