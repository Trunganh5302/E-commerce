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
                Role: 0
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

let createNewUser = (data) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            await db.Users.create({
                UseName: data.UseName,
                passWord: data.passWord,
                FirtName:data.FirtName,
                LastName:data.LastName,
                Phone: data.Phone
            })

            resolve("Oke create a new Category");
        } catch (error) {
            reject(error)
        }
    })  
}

let getUserbyID = (UserID) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: {id: UserID},
                raw: true
            })

            if (user) {
                resolve(user)
            }else{
                resolve({})
            }
        } catch (e) {
            reject(e)
        }
    })
}

let updateUser = (data) => {
    return new  Promise(async(resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: {id: data.id} // tìm Category trong db với điều kiệm id truyền vào
            })
            if (user) {
                user.UseName = data.UseName
                user.passWord = data.passWord
                user.FirtName = data.FirtName
                user.LastName = data.LastName
                user.Phone = data.Phone

                console.log(data.id)

                await user.save()

                let allUser = await db.Users.findAll()
                resolve(allUser)
            }else{
                resolve()
            }
        } catch (error) {
            console.log(error)
        }
    })
}

let deleteUserbyId = (userID) => {
    return new Promise(async(resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: {id: userID}
            })

            if (user) {
                await user.destroy()
            }
            resolve(); // return
        } catch (error) {
            reject(e)
        }
    })
}

module.exports = {
    getAllUser:getAllUser,
    createUser:createUser,
    getUserByUsername:getUserByUsername,
    createNewUser:createNewUser,
    getUserbyID:getUserbyID,
    updateUser:updateUser,
    deleteUserbyId:deleteUserbyId
}