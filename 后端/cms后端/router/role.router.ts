const Router = require("koa-router")
import RoleService from "../controller/role.controller"
const { verifyAuth } = require("../middleware/auth.middleware")
const roleRouter = Router({prefix:"/roles"})

roleRouter.post("/list",verifyAuth,RoleService.getRoleList)

export default roleRouter