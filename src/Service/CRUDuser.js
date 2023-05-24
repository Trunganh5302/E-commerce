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

let createUser = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            await db.Users.create({
                UseName: data.name,
                passWord: data.imageSrc,
            })

            resolve("Oke create a new user");
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getAllUser:getAllUser,
    createUser:createUser
}