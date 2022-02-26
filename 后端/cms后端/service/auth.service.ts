import Menu from "../model/menu.modle"
class AuthService{
    //menu数据的请求
   async menuData(ctx:any,next:any){
       const result = await Menu.findAll({})
       
     
       //console.log(result)
      ctx.menu = result
      await next()   
   }
  
}

export default new AuthService()