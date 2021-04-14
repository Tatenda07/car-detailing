const mongoose = require('mongoose');

var serviceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
    },
    serviceDescription: {
        type: String,
        
    },
    serviceId: {
        type: Number,
        required: true,
    }
}, {
    collection: 'services'
});

module.exports = mongoose.model('Service', serviceSchema);