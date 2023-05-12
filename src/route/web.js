// mỗi 1 lần web chạy thì nó chạy file này đầu tiên

import express from "express";
import homeControler from "../Controler/homeControler";

let router = express.Router();
let initWebRoutes = (app) =>{

    router.get('/',  homeControler.getHomePage)
    router.get('/about',  homeControler.getAboutPage)
    router.get('/crud',  homeControler.getData)

    // xử lí bên data
    router.post('/post-crud',  homeControler.postCRUD)
    router.get('/get-crud',  homeControler.getCRUD)
    router.get('/edit-crud',  homeControler.getEditCRUD)

    router.get('/', (req,res)=>{
        return res.send("Hello trung anh");
    });

    return app.use("/", router)
}

module.exports = initWebRoutes