import { json } from 'body-parser';
import db from '/CODE/Linh tinh/Example/BackendEcommerce/models/index'
import CRUDProduct from '../Service/CRUDProduct';
import CRUDCategory from '../Service/CRUDCategory'


let getHomePage = async (req, res) => {
    let userLoggedIn = false;
    let username = req.query.UseName || "";

    try {
        if (req.session.userId) {
            userLoggedIn = true;
            username = req.session.username;
        }

        let data = await db.Product.findAll();

        console.log('===========');
        console.log(data, "đây là gì");

        return res.render('Homepage.ejs', {
            userLoggedIn: userLoggedIn, // Truyền giá trị userLoggedIn
            username: matchedUser.userName, // Truyền giá trị username
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
};





let getAboutPage = (req, res) => {
    console.log("UserID là ", req.session.userId)
    return res.render('about.ejs')
}

let getShop = async (req, res) => {
    let dataCategory = await CRUDCategory.getAllCategory()
    let data = await CRUDProduct.getAllProduct()

    let userLoggedIn = req.session.userLoggedIn;
    let userId = req.session.userId;
    let username = req.session.username;

    if(userId){
        userLoggedIn = true
    }

    console.log(userLoggedIn, userId, username)

    return res.render('shop.ejs', {
        dataCate: dataCategory,
        dataTable: data,
        userLoggedIn,
        username
    })
}



let getData = (req, res) => {
    return res.render('test/crud.ejs')
}

let postCRUD = async (req, res) => {

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
    let ProductID = req.query.id;
    if (ProductID) {
        let ProductData = await CRUDProduct.getProductbyID(ProductID);
        return res.render('test/editCRUD.ejs', {
            product: ProductData // gán dữ liệu của ProoductData vào trong biến product để truyền ra view
        })
    } else {
        return res.send('From edit page')
    }
}

let getDetailProduct = async (req, res) => {
    let userLoggedIn = req.session.userLoggedIn;
    let userId = req.session.userId;
    let username = req.session.username;
    let ProductID = req.query.id;

    if (userId) {
        userLoggedIn = true;
    }

    console.log(userLoggedIn, userId, username);

    if (ProductID) {
        let ProductData = await CRUDProduct.getProductbyID(ProductID);
        console.log(req.session); // In toàn bộ dữ liệu trong session
        console.log("chúng tôi đang xem dữ liệu trong sesion khi chuyển hướng tới detailProduct")
        return res.render('detailProduct.ejs', {
            product: ProductData,
            userLoggedIn,
            username
        });
    } else {
        return res.send('From edit page');
    }
};


let putCRUD = async (req, res) => {
    let data = req.body // lấy tất cả input 
    let allProduct = await CRUDProduct.updateProduct(data)
    return res.render('test/DisplayCRUD.ejs', {
        dataTable: allProduct
    })
}

let deleteCRUD = async (req, res) => {
    let ProductID = req.query.id;
    if (ProductID) {
        await CRUDProduct.deleteProductbyId(ProductID)
        return res.send("Delete thành công")
    } else {
        return res.send("Không tìm thấy Product")
    }


}

let getProduct = async (req, res) => {
    let data = await CRUDProduct.getAllProduct()

    return res.render('Homepage.ejs', {
        dataTable: data
    })
}


let getCategory = async (req, res, callback) => {
    let userLoggedIn = false;
    let username = req.query.UseName || "";
  
    let dataCategory = await CRUDCategory.getAllCategory();
    let data = await CRUDProduct.getAllProduct();
  
    if (req.session.userId) {
      userLoggedIn = true;
      username = req.session.username;

      console.log('Chúng tôi đứng từ homeControler', username,req.session.userId)
    }
  
    // Gọi callback function và truyền dữ liệu cần truyền vào
    callback(dataCategory, data);
  }


module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getData: getData,
    postCRUD: postCRUD,
    getCRUD: getCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
    getProduct: getProduct,
    getCategory: getCategory,
    getShop: getShop,
    getDetailProduct: getDetailProduct
}