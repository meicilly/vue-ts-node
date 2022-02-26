const jwt = require("jsonwebtoken")
import {PRIVATE_KEY} from "../app/config"


export const Login = async (ctx:any,next:any) => {
    ctx.body = "登录成功"
    //console.log(ctx.user)
    const {id,name} = ctx.user
    //console.log(id,name)
    //登录成功返回token
    const token = jwt.sign({id,name},PRIVATE_KEY,{
        expiresIn: 60 * 60 * 24,
        algorithm: 'RS256'
    })
    //console.log(token)
    ctx.body= {
        id,
        name,
        token
    }
    
}

export const GetMenus = async (ctx:any) => {
    const {menu} = ctx
    
    ctx.body = menu
}
export const GetMenusList = async (ctx:any) => {
    const {menu} = ctx
    let arr:any = []
    menu.forEach((item:any) => {
        arr.push(item)
    })
    console.log(menu)
    ctx.body = {
        code:200,
        data:{
            arr:arr
        }
    }
}

//获取用户管理信息
export const GetUserInfo =async (ctx:any) => {

    ctx.body = "获取用户的信息"
}