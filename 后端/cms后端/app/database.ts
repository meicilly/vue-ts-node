const {Sequelize} = require("sequelize")
const {MYSQL_DATABASE,MYSQL_PASSWORD,MYSQL_USER,MYSQL_HOST} = require("./config")
const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    dialect: "mysql"
  });

  sequelize.authenticate().then((res:any) => {
    console.log("连接数据库成功")
  },(err:any) => {
      console.log("连接数据库失败")
  })

export default sequelize