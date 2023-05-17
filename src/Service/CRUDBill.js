import db from '/CODE/Linh tinh/Example/BackendEcommerce/models/index'

let getAllCart = () => {
    return new Promise(async(resolve, reject) => {
        try{
            let cart = db.Carts.findAll({
            });
            console.log(cart)
            resolve(cart); // thoát khỏi 1 promise
        }catch(e){
            reject(e)
        }
    })
}

let createNewCart = (data) => {
    return new Promise(async(resolve, reject) =>{
        try {
            await db.Carts.create({
                userID: 1,
                productID: 1,
                imageSrc: data.imageSrc,
                idCategory: data.idCategory,
                NameCategory: "Áo nhà NIKE",
                nameProduct: data.nameProduct,
                Price: data.Price,
                Quantity: 2,
            })
            resolve("Oke create a new product");
        } catch (error) {
            reject(error)
        }
    })
      
}

let deleteCartbyId = (CartID) => {
    return new Promise(async(resolve, reject) => {
        try {
            let cart = await db.Carts.findOne({
                where: {id: CartID}
            })

            if (cart) {
                await cart.destroy()
            }
            resolve(); // return
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getAllCart:getAllCart,
    createNewCart:createNewCart,
    deleteCartbyId:deleteCartbyId
}