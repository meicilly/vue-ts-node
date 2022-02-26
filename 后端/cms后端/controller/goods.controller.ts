import GoodsService from "../service/goods.service"
class goodsService{
    async getGoodsData(ctx:any){
        const {offset,limit} = ctx.request.body;
        
        const result =await GoodsService.getGoodsData(offset,limit);
        //console.log(result)
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
}
export default new goodsService()