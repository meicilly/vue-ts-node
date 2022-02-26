const {Model,DataTypes} = require("sequelize")
import sequelize from "../app/database"
class Role extends Model{}
Role.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING
    },
    intro:{
        type:DataTypes.STRING
    },
    menuList:{
        type:DataTypes.STRING
    }
},{
    sequelize,
    tableName:"role",
    createdAt:false,
    updatedAt: false
})

export default Role