const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const _ = require('lodash');
require('../models/service_type_booked.model')

const Service_type_booked = mongoose.model('Service_type_booked');

//add new
router.post('/',(req, res, next) => {
    const newService_type_booked = new Service_type_booked (req.body);

    newService_type_booked.save((err, doc) => {
        if(!err)
            res.send(doc);
       
            else {
                return next(err);
        }
    })

});

//list all
router.get('/', (req, res) => {
    Service_type_booked.find((err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in retrieving services booked: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

//get single record
router.get('/:id', (req,res) => {
    //check if service exists
    Service_type_booked.exists({ _id: req.params.id }).then((result) => {
        if(!result){
            return res.status(400).send(`No service booked record with given id:${req.params.id}`);
        }else{
            Service_type_booked.findById(req.params.id, (err, doc) => {
                if(!err)
                    res.send(doc);
                else
                    console.log('Error in retrieving service booked record: ' + JSON.stringify(err, undefined, 2));
            });
        }
    });
});

//edit or update
router.patch('/:id', (req, res, next) => {
    //check if service type exists in the database
    Service_type_booked.exists({ _id: req.params.id }).then((result) => {
        if(!result){
            return res.status(400).send(`No service booked record with given id:${req.params.id}`);
        }else{
            //fetch service type record
            Service_type_booked.findById(req.params.id, (err, post) => {
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

//delete service type
router.delete('/:id', (req, res) => {
    //check if service exists
    Service_type_booked.exists({ _id: req.params.id }).then((result) => {
        if(!result){
            return res.status(400).send(`No service type record with given id:${req.params.id}`);
        }else{
            Service_type_booked.findByIdAndRemove(req.params.id, (err, doc) => {
                if (!err) {
                    res.send(doc);
                }else{
                    console.log(`Error: could not delete service type: ` +JSON.stringify(err, undefined, 2));
                }
            });
        }
    });
});

module.exports = router;