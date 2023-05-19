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

let addToCart = async (req, res) => {
    console.log("đã vào ");
    console.log(req.body);
    let message = await CRUDBill.createNewCart(req.body);
    console.log(message);
    
    // Kiểm tra xem yêu cầu thêm vào giỏ hàng thành công hay không
    if (message === "Thêm thành công") {
      return res.render('CartProduct.ejs', { successMessage: message });
    } else {
      return res.send('From edit page');
    }
  }
  

let deleteProductCart = async (req,res) =>{
    let cartID =  req.query.id;
    if (cartID) {
        await CRUDBill.deleteCartbyId(cartID)
        return res.redirect("/cart-product2");
        
    }else{
        return res.send("Không tìm thấy Product")
    }
    
    
}
module.exports = {
    ShowCart:ShowCart,
    addToCart:addToCart,
    deleteProductCart:deleteProductCart
}