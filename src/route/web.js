// mỗi 1 lần web chạy thì nó chạy file này đầu tiên

import express from "express";
import homeControler from "../Controler/homeControler";
import userControler from "../Controler/userControler";
import CartControl from "../Controler/CartControl"
import session from 'express-session';

let router = express.Router();
let app = express();


// Đặt cấu hình cho session middleware
router.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
  })
);


// Middleware kiểm tra đăng nhập
const checkLoggedIn = (req, res, next) => {
  if (!req.session.userId) {
    // Chưa đăng nhập, chuyển hướng đến trang đăng nhập
    console.log("chưa đăng nhập")
    return res.redirect('/login');
  }
  console.log('đã đăng kí')
  console.log(req.session.userId)
  // Đã đăng nhập, tiếp tục xử lý yêu cầu
  next();
};



let initWebRoutes = (app) => {

  router.get('/', (req, res) => {
    let userLoggedIn = false;
    let username = "";

    if (req.session.userId) {
      userLoggedIn = true;
      username = req.session.username;
      console.log(username)
    }

    // Gọi hàm getCategory từ homeControler và truyền req, res nếu cần
    homeControler.getCategory(req, res, (dataCategory, data) => {
      return res.render('Homepage.ejs', {
        userLoggedIn: userLoggedIn,
        username: username,
        data: JSON.stringify(data),
        dataCate: dataCategory,
        dataTable: data,
        // Các dữ liệu khác...
      });
    });
  });

  router.get('/shops', homeControler.getShop)
  // lấy sản phẩm theo mã danh mục
  // Thêm hàm getNameCategory vào router.get('/category')
  router.get('/category', homeControler.getProductByCategory)
  router.get('/about', homeControler.getAboutPage) // chưa làm
  router.get('/news', homeControler.getAboutPage)  // chưa làm
  router.get('/contacts', homeControler.getAboutPage)  // chưa làm
  router.get('/admin', homeControler.getAdminPage)

  router.get('/detail-product', homeControler.getDetailProduct)

  router.get('/cart-product2', checkLoggedIn, CartControl.ShowCart)
  // Router để kiểm tra trạng thái đăng nhập
  router.post('/check-login', (req, res) => {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    let loggedIn = req.session.userId ? true : false;
    let user = req.session.userId;
    console.log("đã đăng nhập: ", req.session.userId)

    // Trả về kết quả dưới dạng JSON
    res.json({ loggedIn, user });
  });

  // Router để thêm vào giỏ hàng
  router.post('/port-cart', checkLoggedIn, CartControl.addToCart);
  router.post('/port-bill', checkLoggedIn, CartControl.addToBill);

  router.get('/delete-cartProduct', CartControl.deleteProductCart)


  router.get('/crud', homeControler.getData)

  // xử lí bên data
  router.post('/post-crud', homeControler.postCRUD)
  router.get('/get-crud', homeControler.getCRUD)
  router.get('/edit-crud', homeControler.getEditCRUD)
  router.post('/put-crud', homeControler.putCRUD)
  router.get('/delete-crud', homeControler.deleteCRUD)
  ///Admin
  router.get('/admin/cateAdmin', homeControler.getCRUDCategory) // Hiển thị trang quản lí danh mục
  router.get('/admin/cateAdmin/createCate', homeControler.getCreateForm) // Trang tạo mới danh mục
  router.post('/put-crud-category', homeControler.postNewCategory)// hiển thị form thêm danh mục
  router.get('/edit-crudCate', homeControler.getEditCate) // Trỏ tới trang chỉnh sửa danh mục
  router.post('/put-crud-category-edit',homeControler.getEditCategory) // trang chỉnh sửa danh mục
  router.get('/delete-crudCate', homeControler.deleteCRUDCategory)

  //Admin user
  router.get('/admin/userAdmin', homeControler.getCRUDuser)
  router.get('/admin/userAdmin/createUser', homeControler.getCreateUserForm)
  router.post('/put-crud-user', homeControler.postNewUser)
  router.get('/edit-crudUser', homeControler.getEditUser)
  router.post('/put-crud-user-edit',homeControler.getEditUserdone)
  router.get('/delete-crudUser', homeControler.deleteCRUDuser)

  /// Admin product
  router.get('/admin/productAdmin', homeControler.getCRUDproduct)
  router.get('/admin/cateAdmin/createProduct', homeControler.getCreateProductForm)
  router.post('/put-crud-product', homeControler.postNewProduct)
  router.get('/edit-crudProduct', homeControler.getEditProduct) // chuyển sang editpage
  router.post('/put-crud-product-edit',homeControler.getEditProductdone)
  router.get('/delete-crudProduct', homeControler.deleteCRUDProduct)

  router.get('/admin/billAdmin', homeControler.getCRUDbill)


    // api
  router.get('/login', userControler.handleLogin)
  router.get('/register', userControler.handleRegister)
  router.get('/logout', userControler.logout) 


  router.post('/put-login', userControler.putLogin)
  router.post('/put-register', userControler.putRegister)


  router.get('/', (req, res) => {
    return res.send("Hello trung anh");
  });

  return app.use("/", router)
}

module.exports = initWebRoutes