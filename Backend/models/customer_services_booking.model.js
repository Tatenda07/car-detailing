const mongoose = require('mongoose');

var customer_services_bookingSchema = new mongoose.Schema({
    customer: [
        {type: mongoose.Schema.types.customer.ObjectId, ref: 'customer'}
    ],
    services_booking: [
        {type:mongoose.Schema.types.services_booking.ObjectId, ref: 'services_booking'}
    ],
},{
    collection: 'customer_services_booking'
    
});