const mongoose = require('mongoose');

var service_type_bookedSchema = new mongoose.Schema({
    services_booking: [
        {type:mongoose.Schema.types.services_booking.ObjectId, ref: 'services_booking'}
    ],
    service: [
        {type: mongoose.Schema.types.service.ObjectId, ref:'service'}
    ],

}, {
    collection: 'service_type_booked'
});

module.exports = mongoose.model('Service_type_booked', service_type_bookedSchema);