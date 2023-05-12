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

let getProductbyID = (ProductId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let product = await db.Product.findOne({
                where: {id: ProductId},
                raw: true
            })

            if (product) {
                resolve(product)
            }else{
                resolve({})
            }
        } catch (e) {
            reject(e)
        }
    })
}

let updateProduct = (data) =>{
    return new  Promise(async(resolve, reject) => {
        try {
            let product = await db.Product.findOne({
                where: {id: data.id} // tìm Product trong db với điều kiệm id truyền vào
            })
            if (product) {
                product.name = data.name
                product.imageSrc = data.imageSrc
                product.imageAlt = data.imageAlt
                product.price = data.price
                product.color = data.color

                console.log(data.id)

                await product.save()

                let allProduct = await db.Product.findAll()
                resolve(allProduct)
            }else{
                resolve()
            }
        } catch (error) {
            console.log(error)
        }
    })
}

module.exports = {
    createNewProduct:  createNewProduct,
    getAllProduct: getAllProduct,
    getProductbyID:getProductbyID,
    updateProduct: updateProduct 
}