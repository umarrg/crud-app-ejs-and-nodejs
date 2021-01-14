const mongoose = require('mongoose');
const Schema = mongoose.Schema; 


const crudSchema = new Schema ({

    name: {
        type: String,
        required :true,

    },

    price: {
        type: Number,
        required :true,
    },

}, {timestamps :true});

const crud = mongoose.model('crud', crudSchema);

module.exports = crud;