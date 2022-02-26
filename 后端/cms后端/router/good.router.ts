const Koa = require("koa-router")
import goodsService from "../controller/goods.controller"
const goodsRouter = new Koa({prefix:"/goods"})

goodsRouter.post("/list",goodsService.getGoodsData)

export default goodsRouter