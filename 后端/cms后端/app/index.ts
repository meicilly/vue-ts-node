import Koa from "koa"
const cors = require("koa2-cors")
const bodyParser = require("koa-bodyparser")
const errorHandler = require("./error-handle")
const app = new Koa()
import userRouter from "../router/user.router"
import authRouter from "../router/auth.router"
import roleRouter from "../router/role.router"
import goodRouter from "../router/good.router"



app.use(cors())
app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(authRouter.routes())
app.use(authRouter.allowedMethods())
app.use(roleRouter.routes())
app.use(roleRouter.allowedMethods())
app.use(goodRouter.routes())
app.use(goodRouter.allowedMethods())
app.on("error",errorHandler)


export default app