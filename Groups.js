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
}
// let group = new Group
// group => {members:[]}
// group.members => []