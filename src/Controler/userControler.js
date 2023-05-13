let handelLogin = (req,res) => {
    return res.status(200).json({  // api trả về 1 status, 200 là ở trạng thái bình thường
        message: 'trung anh test api'
    })                              
        
}

module.exports = {
    handelLogin: handelLogin
}