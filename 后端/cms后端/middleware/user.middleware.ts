const errorTypes = require("../contants/error-types")
import UserService from "../service/user.service"
import md5password from "../utils/password-handle"



export const verifyUser = async (ctx:any,next:any) => {
    //ctx.body = "验证用户中"
    //获取用户名密码
    const {name,password} = ctx.request.body;
    //console.log(name,password)
    //判断用户名和密码是否合法
    if(!name || !password){
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit("error",error,ctx)
    }
    //console.log(1)
    //判断用户名是否注册过
   const result =await UserService.verifyRegistered(name)
   //console.log(result)
   if(result){
    //console.log(1)
    const error = new Error(errorTypes.USER_ALREADY_EXISTS)
    return ctx.app.emit("error",error,ctx)
   }
   await next()
}

//对注册用户的密码惊醒加密
export const handlePassword = async (ctx:any, next:any) => {
    const { password } = ctx.request.body;
    ctx.request.body.password = md5password(password)
  
    await next();
  }
  