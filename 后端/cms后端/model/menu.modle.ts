const {Sequelize,Model,DataTypes} = require("sequelize")
import sequelize from "../app/database"
class Menu extends Model{}
Menu.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    type:{
        type:DataTypes.STRING
    },
    url:{
        type:DataTypes.STRING
    },
    name:{
        type:DataTypes.STRING
    },
    sort:{
        type:DataTypes.STRING
    },
    parentId:{
        type:DataTypes.INTEGER
    },
    icon:{
        type:DataTypes.STRING
    },
    userId:{
        type:DataTypes.INTEGER
    },
    children:{
        type:DataTypes.STRING
    }
},{
    sequelize,
    tableName:"menus",
    createdAt:false,
    updatedAt: false
})

export default Menu