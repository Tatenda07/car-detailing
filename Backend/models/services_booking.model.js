const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const connection = require('../db');

var services_bookingSchema = new mongoose.Schema({
    customerFullname: {
        type: String,
        required: true
    },
    email: { 
        type: String, 
        required: true 
    },
    phoneNumber: { 
        type: String, 
        required: true,
        minlength: [4, 'Phone number must have at least 4 digits']
    },
    bookedService: { 
        type: String, 
        required: true 
    },
    carModel: { 
        type: String, 
        required: true,
    },
    date: { 
        type: String 
    },
    message: {
        type: String,
    },
},{
    collection: 'services_booking'
});

// custom validation for email regular expression (Regex)
services_bookingSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid email.');

// custom validation for phone number regular expression (Regex)
services_bookingSchema.path('phoneNumber').validate((val) => {
    phoneNumberRegex = /^[+]?([0-9]*[\.\s\-\(\)]|[0-9]+){3,24}$/;
    return phoneNumberRegex.test(val);
}, 'Invalid phone number.');

services_bookingSchema.plugin(autoIncrement.plugin, 'Services_booking');
module.exports = mongoose.model('Services_booking', services_bookingSchema);
