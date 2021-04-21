const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const _ = require('lodash');
require('../models/services_booking.model')

const Services_booking = mongoose.model('Services_booking');

//book service
router.post('/',(req, res, next) => {
    const newService = new Service (req.body);

    newServices_booking.save((err, doc) => {
        if(!err)
            res.send(doc);
       
            else {
                return next(err);
        }
    })

});

//list all bookings 
router.get('/', (req, res) => {
    Services_booking.find((err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in retrieving services bookings: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

//get single booking record
router.get('/:id', (req,res) => {
    //check if service exists
    Services_booking.exists({ _id: req.params.id }).then((result) => {
        if(!result){
            return res.status(400).send(`No booking record with given id:${req.params.id}`);
        }else{
            Services_booking.findById(req.params.id, (err, doc) => {
                if(!err)
                    res.send(doc);
                else
                    console.log('Error in retrieving booking record: ' + JSON.stringify(err, undefined, 2));
            });
        }
    });
});

//edit services booking
router.patch('/:id', (req, res, next) => {
    //check if service exists in the database
    Services_booking.exists({ _id: req.params.id }).then((result) => {
        if(!result){
            return res.status(400).send(`No booking record with given id:${req.params.id}`);
        }else{
            //fetch service record
            Services_booking.findById(req.params.id, (err, post) => {
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
    Services_booking.exists({ _id: req.params.id }).then((result) => {
        if(!result){
            return res.status(400).send(`No booking record with given id:${req.params.id}`);
        }else{
            Services_booking.findByIdAndRemove(req.params.id, (err, doc) => {
                if (!err) {
                    res.send(doc);
                }else{
                    console.log(`Error: could not delete booking: ` +JSON.stringify(err, undefined, 2));
                }
            });
        }
    });
});
//



module.exports = router;