const { getCategory } = require('../models/category.model');

function show (req, res){
    getCategory((data, err) =>{
        if(err) throw err;
        res.json(data);
    });
}

function showOne (req, res){

}

module.exports = {
    show,
    showOne
}