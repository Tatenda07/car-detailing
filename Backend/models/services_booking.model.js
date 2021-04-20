const mongoose = require('mongoose');

var services_bookingSchema = new mongoose.Schema({
    /*customer: [
        {type: mongoose.Schema.types.customer.ObjectId, ref: 'customer'}
    ],
    service: [
        {type: mongoose.Schema.types.service.ObjectId, ref:'service'}
    ],*/
    timeStamp: {
       type: Date,
       default: Date.now,
    },
    collection: 'services_booking'

});