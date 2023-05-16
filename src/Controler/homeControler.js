import { json } from 'body-parser';
import db from '/CODE/Linh tinh/Example/BackendEcommerce/models/index'
import CRUDProduct from '../Service/CRUDProduct';
import CRUDCategory from '../Service/CRUDCategory'


let getHomePage = async (req,res) =>{

    try {
        let data = await db.Product.findAll(); // tham chiếu đến database gọi tất cả dữ liệu có trong đó
        console.log('===========')
        console.log(data)
        return res.render('Homepage.ejs', {
            data: JSON.stringify(data)
        })

    } catch (error) {
        console.log(error)
    }


}

let getAboutPage = (req, res) => {
    return res.render('about.ejs')
}

let getShop = async (req, res) => {
    let dataCategory = await CRUDCategory.getAllCategory()
    let data = await CRUDProduct.getAllProduct()
    return res.render('shop.ejs', {
        dataCate: dataCategory,
        dataTable: data
    })
}

let getData = (req,res) => {
    return res.render('test/crud.ejs')
}

let postCRUD = async (req, res) =>{

    let message = await CRUDProduct.createNewProduct(req.body)
    console.log(message)
    return res.send("trung anh đã post")
}

let getCRUD = async (req, res) => {
    let data = await CRUDProduct.getAllProduct()
    console.log("----------------")
    console.log(data)
    console.log("----------------")

    return res.render('test/DisplayCRUD.ejs', {
        dataTable: data 
    })
}

let getEditCRUD = async (req, res) => {
    let ProductID =  req.query.id;
    if(ProductID){
        let ProductData = await CRUDProduct.getProductbyID(ProductID);
        return res.render('test/editCRUD.ejs',{
            product: ProductData // gán dữ liệu của ProoductData vào trong biến product để truyền ra view
        })
    }else{
        return res.send('From edit page')
    }
}

let getDetailProduct = async (req,res) => {
    let ProductID =  req.query.id;
    if(ProductID){
        let ProductData = await CRUDProduct.getProductbyID(ProductID);
        return res.render('detailProduct.ejs',{
            product: ProductData // gán dữ liệu của ProoductData vào trong biến product để truyền ra view
        })
    }else{
        return res.send('From edit page')
    }
}

let putCRUD = async (req, res) => {
    let data = req.body // lấy tất cả input 
    let allProduct = await CRUDProduct.updateProduct(data)
    return res.render('test/DisplayCRUD.ejs', {
        dataTable: allProduct 
    })
}

let deleteCRUD = async (req,res) =>{
    let ProductID =  req.query.id;
    if (ProductID) {
        await CRUDProduct.deleteProductbyId(ProductID)
        return res.send("Delete thành công")
    }else{
        return res.send("Không tìm thấy Product")
    }
    
    
}

let getProduct = async (req,res) => {
    let data = await CRUDProduct.getAllProduct()

    return res.render('Homepage.ejs', {
        dataTable: data
    })
}


let getCategory = async (req,res) => {
    let dataCategory = await CRUDCategory.getAllCategory()
    let data = await CRUDProduct.getAllProduct()
    return res.render('Homepage.ejs', {
        dataCate: dataCategory,
        dataTable: data
    })
}



module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getData: getData,
    postCRUD: postCRUD,
    getCRUD: getCRUD,
    getEditCRUD:getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
    getProduct:getProduct,
    getCategory:getCategory,
    getShop:getShop,
    getDetailProduct:getDetailProduct
}