const mongoose = require('mongoose');
const connection = require('../db');

var customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: [4, 'Phone number must have at least 4 digits']
    }
}, {
    collection: 'customers'
});

//custom validation for email regular expression (Regex)
customerSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid email.');

// custom validation for phone number regular expression (Regex)
customerSchema.path('phoneNumber').validate((val) => {
    phoneNumberRegex = /^[+]?([0-9]*[\.\s\-\(\)]|[0-9]+){3,24}$/;
    return phoneNumberRegex.test(val);
}, 'Invalid phone number.');

module.exports = mongoose.model('customer', customerSchema);