import Role from "../model/role.modle"

const findRoleList =async (offset:number,limit:string) => {
    try {
        //console.log(offset,limit)
        //console.log(typeof limit)
        let lim = parseInt(limit)
        const result = await Role.findAndCountAll({
            attributes: ['createAt','updateAt','name','intro','menuList'],
            order: [
                ['id','DESC']
            ],
            limit:lim,
            offset: offset
        })
        //console.log(result.count)
        return result;
    }catch(error){
        console.log(error)
    }
    
}

export {
    findRoleList
}