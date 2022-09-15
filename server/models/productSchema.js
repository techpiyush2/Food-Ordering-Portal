const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    },
    price : {
        type: String,
        required: true
    },
    description : {
        type: String,
    }
});

module.exports = mongoose.model('grocery', productSchema);
