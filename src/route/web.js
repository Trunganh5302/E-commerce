// mỗi 1 lần web chạy thì nó chạy file này đầu tiên

import express from "express";
import homeControler from "../Controler/homeControler";
import userControler from "../Controler/userControler";
import CartControl from "../Controler/CartControl"

let router = express.Router();
let initWebRoutes = (app) =>{

    router.get('/',  homeControler.getCategory)
    router.get('/shops',  homeControler.getShop) // chưa làm
    router.get('/about',  homeControler.getAboutPage) // chưa làm
    router.get('/news',  homeControler.getAboutPage)  // chưa làm
    router.get('/contacts',  homeControler.getAboutPage)  // chưa làm

    router.get('/detail-product',  homeControler.getDetailProduct)

    router.get('/cart-product2',  CartControl.ShowCart)
    router.post('/port-cart',  CartControl.addToCart)

    router.get('/crud',  homeControler.getData)

    // xử lí bên data
    router.post('/post-crud',  homeControler.postCRUD)
    router.get('/get-crud',  homeControler.getCRUD)
    router.get('/edit-crud',  homeControler.getEditCRUD)
    router.post('/put-crud',  homeControler.putCRUD)
    router.get('/delete-crud',  homeControler.deleteCRUD) 
-

    // api
    router.get('/login',  userControler.handleLogin) 
    router.get('/register',  userControler.handleRegister) 


    router.get('/', (req,res)=>{
        return res.send("Hello trung anh");
    });

    return app.use("/", router)
}

module.exports = initWebRoutes