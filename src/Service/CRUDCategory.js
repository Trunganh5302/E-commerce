import { resolveInclude } from 'ejs'
import db from '/CODE/Linh tinh/Example/BackendEcommerce/models/index'

let getAllCategory = () => {
    return new Promise(async(resolve, reject) => {
        try{
            let category = db.Categorys.findAll({
            });
            console.log(category)
            resolve(category); // thoát khỏi 1 promise
        }catch(e){
            reject(e)
        }
    })
}

let createNewCategory = (data) =>{
    return new Promise(async(resolve, reject) =>{
        try {
            await db.Categorys.create({
                nameCategory: data.nameCategory,
                imageSrc: data.imageSrc,
                Desc: data.Desc
            })

            resolve("Oke create a new Category");
        } catch (error) {
            reject(error)
        }
    })  
}

let getCategorybyID = (categoryID) => {
    return new Promise(async(resolve, reject) => {
        try {
            let category = await db.Categorys.findOne({
                where: {id: categoryID},
                raw: true
            })

            if (category) {
                resolve(category)
            }else{
                resolve({})
            }
        } catch (e) {
            reject(e)
        }
    })
}

let updateCategory = (data) => {
    return new  Promise(async(resolve, reject) => {
        try {
            let category = await db.Categorys.findOne({
                where: {id: data.id} // tìm Category trong db với điều kiệm id truyền vào
            })
            if (category) {
                category.nameCategory = data.nameCategory
                category.imageSrc = data.imageSrc
                category.Desc = data.Desc

                console.log(data.id)

                await category.save()

                let allCategory = await db.Categorys.findAll()
                resolve(allCategory)
            }else{
                resolve()
            }
        } catch (error) {
            console.log(error)
        }
    })
}

let deleteCategorybyId = (categoryID) => {
    return new Promise(async(resolve, reject) => {
        try {
            let category = await db.Categorys.findOne({
                where: {id: categoryID}
            })

            if (category) {
                await category.destroy()
            }
            resolve(); // return
        } catch (error) {
            reject(e)
        }
    })
}

module.exports = {
    getAllCategory:getAllCategory,
    createNewCategory:createNewCategory,
    getCategorybyID:getCategorybyID,
    updateCategory:updateCategory,
    deleteCategorybyId:deleteCategorybyId

}