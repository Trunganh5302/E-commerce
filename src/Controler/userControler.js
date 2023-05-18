import db from '/CODE/Linh tinh/Example/BackendEcommerce/models/index';
import CRUDuser from '../Service/CRUDuser';

const userController = {
  handleLogin: (req, res) => {
    return res.render('login.ejs');
  },

  handleRegister: async (req, res) => {
    try {
      let data = await db.Users.findAll();
      console.log('===========');
      console.log(data);
      return res.render('register.ejs');
    } catch (error) {
      console.log(error);
    }
  },

  putLogin : async (req, res) => {
    let dataUser = req.body;
    let allUsers = await CRUDuser.getAllUser();
    let matchedUser = null;
    let userLoggedIn = false; // Khai báo biến userLoggedIn
  
    for (let user of allUsers) {
      if (user.UseName === dataUser.UseName && user.passWord === dataUser.passWord) {
        matchedUser = user;
        break;
      }
    }
  
    if (matchedUser) {
      console.log("User tìm thấy:", matchedUser);
      userLoggedIn = true; // Gán giá trị true cho userLoggedIn
      res.redirect('/');
      // Thực hiện các hành động khi người dùng khớp
    } else {
      res.send('<script>alert("Tên đăng nhập hoặc mật khẩu không đúng"); window.location.href="/login";</script>');
      // Thực hiện các hành động khi người dùng không khớp
    }
  }
};

export default userController;
