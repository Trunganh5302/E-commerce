import { resolveInclude } from 'ejs'
import db from '/CODE/Linh tinh/Example/BackendEcommerce/models/index'

let createNewProduct = (data) => {
    return new Promise(async(resolve, reject) =>{
        try {
            await db.Product.create({
                name: data.name,
                imageSrc: data.imageSrc,
                imageAlt: data.imageAlt,
                price: data.price,
                color: data.color === 'Đen' ? true : false
            })

            resolve("Oke create a new product");
        } catch (error) {
            reject(error)
        }
    })  


}

let getAllProduct = () => {
    return new Promise(async(resolve, reject) => {
        try{
            let product = db.Product.findAll({
                raw: true
            });
            resolve(product); // thoát khỏi 1 promise
        }catch(e){
            reject(e)
        }
    })
}

let getProductbyID = (id) => {
    
}


module.exports = {
    createNewProduct:  createNewProduct,
    getAllProduct: getAllProduct,
    getProductbyID:getProductbyID
}