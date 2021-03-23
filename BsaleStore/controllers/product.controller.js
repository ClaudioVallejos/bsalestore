function getProduct (req, res){
    res.status(200).send("hola desde el controlador de product")
}

function getOneProduct (req, res){

}

module.exports = {
    getProduct,
    getOneProduct
}