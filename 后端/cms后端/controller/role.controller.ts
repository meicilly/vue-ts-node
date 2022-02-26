import {findRoleList} from "../service/role.service"

class RoleService {
   async getRoleList(ctx:any,next:any){
       //console.log(ctx.request.body)
    const {offset,limit} = ctx.request.body
    //console.log(offset,limit)
    let arr = [] 
        const result =await findRoleList(offset,limit)
        arr = result.rows
       // console.log(result)
        ctx.body ={
            code:200,
            data:{
                count:result.count,
                arr
            }
        }
    } 
}

export default new RoleService()