(async ()=>{
    const Sequelize = require('sequelize')

    const sequelize = new Sequelize('test','root','mima1314',{
        host:'localhost',
        dialect:'mysql',
        operatorsAliases: false // 仍可通过传⼊ operators map ⾄operatorsAliases 的⽅式来使⽤字符串运算符，但会返回弃⽤警告
    })

    //定义模型
    const Fruit = sequelize.define('Fruit',{
        name:  { type: Sequelize.STRING(20), allowNull: false },
        price: { type: Sequelize.FLOAT, allowNull: false },
        stock: { type: Sequelize.INTEGER, defaultValue: 0 }
    })

    let ret = await Fruit.sync()
    // ret = await Fruit.create({
    //     name:'香蕉',
    //     price:3.5
    // })
    // console.log('create',ret)
    ret = await Fruit.findAll()
    console.log('findAll',JSON.stringify(ret))

})()