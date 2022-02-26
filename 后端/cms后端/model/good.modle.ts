const {Sequelize,Model,DataTypes} = require("sequelize")
import sequelize from "../app/database"
class Good extends Model{}
Good.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING
    },
    oldPrice:{
        type:DataTypes.STRING
    },
    newPrice:{
        type:DataTypes.STRING
    },
    desc1:{
        type:DataTypes.STRING
    },
    status1:{
        type:DataTypes.INTEGER
    },
    imgUrl:{
        type:DataTypes.STRING
    },
    inventoryCount:{
        type:DataTypes.INTEGER
    },
    saleCount:{
        type:DataTypes.STRING
    },
    favorCount:{
        type:DataTypes.STRING
    },
    address:{
        type:DataTypes.STRING
    },
    categoryId:{
        type:DataTypes.STRING
    }
},{
    sequelize,
    tableName:"goods",
    createdAt:false,
    updatedAt: false
})

export default Good