const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    productId : Number,
    productName : String,
    productGenre : String,
    productAuthor : String,
    productPrice : Number,
    productImage : String
});

var Productdata = mongoose.model('product', NewProductSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Productdata;