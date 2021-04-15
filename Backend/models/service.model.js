const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const connection = require('../db');

autoIncrement.initialize(connection);

var serviceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
    },
    serviceDescription: {
        type: String,
        
    }
}, {
    collection: 'services'
});

serviceSchema.plugin(autoIncrement.plugin, 'Service');
module.exports = mongoose.model('Service', serviceSchema);