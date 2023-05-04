import express from "express";
import bodyParser from "body-parser"; // hỗ trợ lấy tham số ở client
import viewEngine from "./Config/viewEngine"
import initWebRoutes from './route/web'
require('dotenv').config(); // gọi tới hàm 

let app = express();

// config app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app)
initWebRoutes(app)

let port = process.env.PORT || 6969; // lấy port đã tạo trước đó
// nếu port = undefined thì => port = 6969


app.listen(port, () =>{
    console.log("Backend nodejs is running on the port : " + port);
})