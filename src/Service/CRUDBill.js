import db from '/CODE/Linh tinh/Example/BackendEcommerce/models/index'

let getAllCart = (userID) => {
    return new Promise(async (resolve, reject) => {
      try {
        let cart = await db.Carts.findAll({
          where: {
            userID: userID
          }
        });
        resolve(cart);
      } catch (error) {
        reject(error);
      }
    });
  };

  let getAllCart2 = () => {
    return new Promise(async(resolve, reject) => {
      try{
          let cart = db.Bills.findAll({
            raw:true
          });
          console.log(cart)
          resolve(cart); // thoát khỏi 1 promise
      }catch(e){
          reject(e)
      }
  })
  };
  

let DelAllCart = () => {
    return new Promise(async (resolve, reject) => {
      try {
        await db.Carts.destroy({ where: {} }); // Xóa tất cả các sản phẩm trong bảng Carts
        resolve("Xóa thành công");
      } catch (error) {
        reject(error);
      }
    });
  };
  

let createNewCart = (data, userID, productID) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Carts.create({
                userID: userID,
                productID: productID,
                imageSrc: data.imageSrc,
                idCategory: data.idCategory,
                NameCategory: data.nameCategory,
                nameProduct: data.nameProduct,
                Price: data.Price,
                Quantity: 1,
            })
            resolve("Oke create a new product");
        } catch (error) {
            reject(error)
        }
    })

}

let createNewBill = (data, userID) => {
    return new Promise(async (resolve, reject) => {
        console.log("UserID trong createNewBill", data)
        try {
            await db.Bills.create({
                UserID: userID,
                Quantity: data.Quantity,
                Total: data.Total
            })
            resolve("Oke create a new bill");
        } catch (error) {
            reject(error)
        }
    })
}



let deleteCartbyId = (CartID) => {
    return new Promise(async (resolve, reject) => {
        try {
            let cart = await db.Carts.findOne({
                where: { id: CartID }
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
    getAllCart: getAllCart,
    createNewCart: createNewCart,
    deleteCartbyId: deleteCartbyId,
    createNewBill: createNewBill,
    DelAllCart:DelAllCart,
    getAllCart2:getAllCart2
}