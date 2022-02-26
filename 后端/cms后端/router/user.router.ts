const Router = require("koa-router")

const {verifyUser,handlePassword} = require("../middleware/user.middleware")
const { verifyAuth } = require("../middleware/auth.middleware")
import UserController from "../controller/user.controller"
const userRouter = new Router({prefix:"/users"})
userRouter.post('/',verifyUser,handlePassword, UserController.create)
userRouter.post("/list",verifyAuth,UserController.getUserInfo)
userRouter.delete("/:id",verifyAuth,UserController.deleteUserInfo)
userRouter.post("/edit",verifyAuth,UserController.editUserData)

export default userRouter