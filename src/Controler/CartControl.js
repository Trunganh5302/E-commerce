import db from '/CODE/Linh tinh/Example/BackendEcommerce/models/index'
import CRUDProduct from '../Service/CRUDProduct';
import CRUDCategory from '../Service/CRUDCategory'
import CRUDBill from '../Service/CRUDBill'

let ShowCart = async (req,res) => {
    let data = await CRUDBill.getAllCart()
    console.log(data)
    return res.render('CartProduct.ejs', {
        dataTable: data 
    })
}

let addToCart = async (req,res) => {
    console.log("đã vào ")
    console.log(req.body)
    let message = await CRUDBill.createNewCart(req.body)
    console.log(message)
    return res.send('CartProduct.ejs')
}

module.exports = {
    ShowCart:ShowCart,
    addToCart:addToCart
}