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
                UseName: data.UseName,
                passWord: data.passWord,
            })

            resolve("Oke create a new user");
        } catch (error) {
            reject(error)
        }
    })
}

let getUserByUsername = (username) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.Users.findOne({
                where: { UseName: username }
            });
            resolve(user);
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    getAllUser:getAllUser,
    createUser:createUser,
    getUserByUsername:getUserByUsername
}