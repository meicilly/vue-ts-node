const Koa = require("koa-router")


import { verifyLogin } from "../middleware/auth.middleware"
import {Login,GetMenus,GetMenusList } from "../controller/auth.controller"
import AuthService from "../service/auth.service"

const authRouter = new Koa()

authRouter.post("/login",verifyLogin,Login)
authRouter.get("/menu",AuthService.menuData,GetMenus)
authRouter.post("/menus/list",AuthService.menuData,GetMenusList)

export default authRouter