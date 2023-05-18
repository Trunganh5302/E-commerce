import db from '/CODE/Linh tinh/Example/BackendEcommerce/models/index'

let getAllUser = () => {
    return new Promise(async(resolve, reject) => {
        try{
            let user = db.Users.findAll({
                raw: true
            });
            resolve(user); // thoát khỏi 1 promise
        }catch(e){
            reject(e)
        }
    })
}

module.exports = {
    getAllUser:getAllUser
}