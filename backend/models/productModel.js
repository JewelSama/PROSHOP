const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: String,
        required: true,
        default: false,
    },
}, {
    timestamps: true,
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;