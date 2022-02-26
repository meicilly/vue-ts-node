 import userService from "../service/user.service";
import UserService from "../service/user.service"
 class UserController{
     async create(ctx:any,next:any){
        //1.获取用户的参数
        const user = ctx.request.body;
        //console.log(user)
        
        const result = UserService.create(user)
        //console.log(result)
        ctx.body = "注册用户成功"
     }
     async getUserInfo(ctx:any,next:any){
        console.log(ctx.request.body)
        const {offset,limit,name,cellphone,realname} = ctx.request.body
        console.log(offset,limit,name)
        const result =await UserService.getAllUser(offset,limit,name,cellphone,realname)
        let arr:any = []
        let count = result.count;
        result.rows.forEach((item:any) => {
            //console.log(item.dataValues)
            arr.push(item.dataValues)
        })
        //console.log(arr,count)
        ctx.body = {
            code:"200",
            data:{
                arr,
                count
            },
            msg:"请求成功"
        }
     }
     async deleteUserInfo(ctx:any,next:any){
        //console.log(ctx.url)
        const result = ctx.url.split("/")
        let id = result[result.length - 1]
        id = parseInt(id)
        const res = userService.deleteUserById(id)
        ctx.body = {
            code:200,
            data:res
        }
        //console.log(id)
        //console.log(result)
        //ctx.body = "删除"
     }
    async editUserData(ctx:any){
        //console.log(ctx.request.body)
        const {id,name,realname,cellphone} = ctx.request.body
        const result = userService.updateUserData(name,realname,cellphone,id)
        ctx.body = {
            code:200,
            data:{
                msg:"修改成功"
            }
        }
    }
 }



 export default new UserController()