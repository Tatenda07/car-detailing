const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const _ = require('lodash');
const { route } = require('./services_bookingController');
require('../models/service.model')

const Customer_services_booking = mongoose.model('Customer_services_booking');

//add
router.post('/', (req, res, next) => {
    const newCustomer_services_booking = new Customer_services_booking(req.body);

    newCustomer_services_booking.save((err, doc) => {
        if(!err)
            res.send(doc);

            else {
                return next (err);
            }
    })
});

//list all bookings
router.get('/', (req, res) => {
    Customer_services_booking.find((err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in retrieving bookings: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

//get single booking record
router.get('/:id', (req, res) => {
    Customer_services_booking.exists({_id: req.params.id}).then((result) => {
        if(!result){
            return res.status(400).send(`No booking record with given id:${req.params.id}`);
        }else {
            Customer_services_booking.findById(req.params.id, (err, doc) => {
                if(!err)
                    res.send(doc);
                else   
                    console.log('Error in retrieving booking record: ' + JSON.stringify(err, undefined, 2));
            });
        }
    });
});

//edit booking
router.patch('/:id', (req, res, next) => {
    //check if booking exists in the database
    Customer_services_booking.exists({_id: req.params.id}).then((result) => {
        if(!result){
            return res.status(400).send(`No service record with given id:${req.params.id}`);
        }else{
            //fetch service record
            Customer_services_booking.findById(req.params.id, (err, post) => {
                if (err) return next(err);

                //update service using lodash
                _.assign(post, req.body);
                post.save((err) => {
                    if(err) return next(err);

                    return res.status(200).json(post);
                })
            });
        }
    });
}); 

//delete booking
router.delete('/:id', (req, res) => {
    //check if service exists
    Customer_services_booking.exists({ _id: req.params.id }).then((result) => {
        if(!result){
            return res.status(400).send(`No booking record with given id:${req.params.id}`);
        }else{
            Customer_services_booking.findByIdAndRemove(req.params.id, (err, doc) => {
                if (!err) {
                    res.send(doc);
                }else{
                    console.log(`Error: could not delete booking: ` +JSON.stringify(err, undefined, 2));
                }
            });
        }
    });
});

modules.exports = router;