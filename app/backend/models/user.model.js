const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    zip: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        maxlength: 8
    },
    address1: {
        type: String,
        required: true,
        trim: true
    },
    address2: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
