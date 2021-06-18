const kaikeba = {
    info:{name : '开课吧',desc:'开课吧真不错'},
    get name(){
        return this.info.name
    },
    set name(val){
        console.log('new name is '+ val) // new name is kaikeba
        this.info.name = val + 'ggg'
    }
}

console.log(kaikeba.name) //开课吧
kaikeba.name = 'kaikeba' 
console.log(kaikeba.name) //        kaikebaggg