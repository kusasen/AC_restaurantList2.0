const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shopSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    name_en:{
        type: String,
        required: false,
    },
    category:{
        type: String,
        required: false,
    },
    image:{
        type: String,
        required: false,
    },
    location:{
        type: String,
        required: false,
    },
    phone:{
        type: String,
        required: false,
    },
    google_map:{
        type: String,
        required: false,
    },
    rating:{
        type: String,
        required: false,
    },
    description:{
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('Shop', shopSchema);