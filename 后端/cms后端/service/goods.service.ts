import Good from "../model/good.modle"

class GoodsService{
    async getGoodsData(offset:any,limit:any){
        const result = await Good.findAndCountAll({
            order: [
                ['id','DESC']
            ],
            limit: limit,
            offset: offset
        })
        //console.log(result)
        return result
    }
}

export default new GoodsService()