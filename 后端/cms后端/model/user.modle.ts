//初始化模型
const {Model,DataTypes} = require("sequelize")
import sequelize from "../app/database"
class User extends Model {}
User.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    avatar_url:{
        type:DataTypes.STRING
    },
    cellphone:{
        type:DataTypes.STRING
    },
    realname:{
        type:DataTypes.STRING
    }
},{
    sequelize,
    createdAt:false,
    updatedAt:false,
    tableName:"user"
})


export default User
 


