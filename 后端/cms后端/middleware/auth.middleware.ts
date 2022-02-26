const jwt = require("jsonwebtoken")

const errorTypes = require("../contants/error-types")
import UserService from "../service/user.service"
import md5password from "../utils/password-handle"
const { PUBLIC_KEY } = require('../app/config');


//验证用户名是否正确
export const verifyLogin = async (ctx:any,next:any) => {
    //console.log("middleware")
    //获取用户名面
    const {name,password} = ctx.request.body
    //console.log(name,password)
    //判断用户名和密码是否合法
    //console.log(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
    if(!name || !password){
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED)
        return ctx.app.emit("error",error,ctx)
    }
    //根据用户名 拿到密码
    const result = await UserService.verifyRegistered(name)
    //console.log(result)
    if(md5password(password) !== result.password){
        const error = new Error(errorTypes.PASSWORD_IS_INCORRENT)
        return ctx.app.emit("error",error,ctx)
    }
    ctx.user = result
    
    await next()
}

//验证用户是否有权限
export const verifyAuth = async (ctx:any,next:any) => {
    console.log("验证授权的middleware")
    //1.获取token
    //console.log(ctx.headers.authorization)
    const authorization = ctx.headers.authorization;
    if(!authorization){
        const error = new Error(errorTypes.UNAUTHORIZATION);
        return ctx.app.emit('error', error, ctx);
    }
    const token = authorization.replace("Bearer ",'')
    //console.log(token)
    // 2.验证token(id/name/iat/exp)
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"]
    });
    //console.log(result)
    ctx.user = result;
    await next();
  } catch (err) {
    const error = new Error(errorTypes.UNAUTHORIZATION);
    ctx.app.emit('error', error, ctx);
  }
}


