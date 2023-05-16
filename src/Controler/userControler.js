import db from '/CODE/Linh tinh/Example/BackendEcommerce/models/index'

let handleLogin = (req,res) => {
    return res.render('login.ejs')
}

let handleRegister = async (req, res) => {
    

    try {
        let data = await db.Users.findAll(); // tham chiếu đến database gọi tất cả dữ liệu có trong đó
        console.log('===========')
        console.log(data)
        return res.send('register.ejs')

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    handleLogin: handleLogin,
    handleRegister:handleRegister
}