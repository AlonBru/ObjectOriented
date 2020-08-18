class Group{
    constructor(){
        this.members = [];
    }
    add(val){
        if(!this.members.includes(val)){
            this.members.push(val);
            return val;
        }
    }
    delete(val){
        if(this.members.includes(val)){
            this.members.splice(this.members.indexOf(val),1)
        }
    }
    has(val){
        return this.members.includes(val)
    }
    static from(obj){
        let group = new Group;
        for(let ele of obj){
            group.add(ele)
        }
        return group;
    }
    [Symbol.iterator](){
       return new GroupIterator(this);
    }
}

class GroupIterator{
    constructor(group){
        this.place=0;
        this.group=group;
    }
    next(){
        if (this.place==this.group.members.length){
            return {done:true}
        }
        let value = this.group.members[this.place];
        this.place++;
        return {value,done:false}
    }
}
