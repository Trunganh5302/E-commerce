import { json } from 'body-parser';
import db from '/CODE/Linh tinh/Example/BackendEcommerce/models/index'
import CRUDProduct from '../Service/CRUDProduct';


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
    return res.render('test/about.ejs')
}

let getData = (req,res) => {
    return res.render('test/crud.ejs')
}

let postCRUD = async (req, res) =>{

    let message = await CRUDProduct.createNewProduct(req.body)
    console.log(message)
    return res.send("trung anh đã post")
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getData: getData,
    postCRUD: postCRUD
}