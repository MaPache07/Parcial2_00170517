var mongoose = require('mongoose');

var Tarjeta = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    fecha: {
        type: Date,
        require: true
    },
    codigo: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('tarjeta', Tarjeta);