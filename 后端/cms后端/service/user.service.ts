import console from "console";
import User from "../model/user.modle"
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
    //判断用户名是否被注册了
    //let name = "me"
interface IAccount{
    name:string
    password:string,
    cellphone:number,
    realname:string
}
class UserService{
    //验证用户根据用户名
    async verifyRegistered(name:string){
      try {
        const result = await User.findAll({
            where:{
                name:name
            }
        })
        //console.log(result[0].dataValues)
        return result[0].dataValues
      } catch (error) {
          //console.log(error)
          return false
      }
        
    }
    //创建用户
    async create(user:IAccount){
        try {
           const result = await User.create({
               name:user.name,
               password:user.password,
               realname:user.realname,
               cellphone:user.cellphone
           }) 
        } catch (error) {
            
        }
    }

    //分页查找查找用户
    async getAllUser(offset:number,limit:number,name:string = '',cellphone:any = '',realname:string = ''){
        try {
            console.log(offset,limit,name,cellphone)
            const result = await User.findAndCountAll({
                attributes: ["id",'createAt','updateAt','name','cellphone','realname','enable'],
                order: [
                    ['id','DESC']
                ],
                where:{
                    name:{
                        [Op.like]:'%' +name + '%'
                    },
                    cellphone:{
                        [Op.like]:'%' +cellphone + '%'
                    },
                    realname:{
                        [Op.like]:'%' +realname + '%'
                    }
                },
                limit: limit,
                offset: offset
            })
            //console.log(result.count)
            return result;
        }catch(error){
            console.log(error)
        }
        
    }
    async deleteUserById(id:number){
        //console.log(typeof id)
       const result =  User.destroy({
            where:{id:
                {[Op.eq]:id}}
        });
        return result
    }
    async updateUserData(name:string,realname:string,cellphone:string,id:number){
      
        console.log(name,realname,cellphone,id)
        const result =await User.update({
            name:name,
            cellphone:cellphone,
            realname:realname
        },{
            where:{
                id:id
            }
        })
        console.log(result)
    }
} 
export default new UserService()

