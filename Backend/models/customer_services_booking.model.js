const mongoose = require('mongoose');

var customer_services_bookingSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    }
})