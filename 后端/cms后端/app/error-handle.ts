const errorTypes = require("../contants/error-types")
const errorHandle = (error:any,ctx:any) => {
    //console.log(1)
    let message,status
    switch(error.message){
        case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
            status = 400
            message = "用户名或密码不能为空"
            break;
        case errorTypes.USER_ALREADY_EXISTS:
            status = 400
            message = '用户名已经注册了'
            break;
        case errorTypes.PASSWORD_IS_INCORRENT:
            status = 400
            message = '用户名密码不正确'
            break;
        case errorTypes.UNAUTHORIZATION:
            status = 401; // 参数错误
            message = "无效的token~";
            break;
        default:
            status = 404
            message = "NOT FOUND"
    }
    ctx.status = status
    ctx.body = message
}


module.exports = errorHandle;