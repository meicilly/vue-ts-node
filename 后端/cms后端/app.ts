import app from "./app/index"
require("./app/config")
import {APP_PORT} from "./app/config" 
require("./app/database")

app.listen(APP_PORT,() => {
    console.log(`监听了端口${APP_PORT}`)
})
