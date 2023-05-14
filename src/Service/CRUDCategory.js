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

module.exports = {
    getAllCategory:getAllCategory
}