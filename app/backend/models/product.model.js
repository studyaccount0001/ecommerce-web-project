const mongoose = require('mongoose');

const Schema = moongose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    photo: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    description: {
        type: String,
        trim: true,
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    recommended_pets: [{
        type: String,
        trim: true
    }],
    qty_stock: {
        type: Number,
        required: true,
        min: [0, "Stock quantity can't be lesser than 0"]
    },
    qty_sold: {
        type: Number,
        required: true,
        min: [0, "Sold quantity can't be lesser than 0"]
    },
    species: [{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 3
    }],
    age: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
