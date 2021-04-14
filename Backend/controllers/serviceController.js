const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const _ = require('lodash'); 
require('../models/service.model')

const Service = mongoose.model('Service');

//add new service
router.post('/',(req, res, next) => {
    const newService = new Service (req.body);

    newService.save((err, doc) => {
        if(!err)
            res.send(doc);
       
            else {
                return next(err);
        }
    })

});

//list all services
router.get('/', (req, res) => {
    Service.find((err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in retrieving services: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

//get single service record
router.get('/:id', (req,res) => {
    //check if service exists
    Service.exists({ _id: req.params.id }).then((result) => {
        if(!result){
            return res.status(400).send(`No service record with given id:${req.params.id}`);
        }else{
            Service.findById(req.params.id, (err, doc) => {
                if(!err)
                    res.send(doc);
                else
                    console.log('Error in retrieving service record: ' + JSON.stringify(err, undefined, 2));
            });
        }
    });
});

//edit or update service information
router.patch('/:id', (req, res, next) => {
    //check if service exists in the database
    Service.exists({ _id: req.params.id }).then((result) => {
        if(!result){
            return res.status(400).send(`No service record with given id:${req.params.id}`);
        }else{
            //fetch service record
            Service.findById(req.params.id, (err, post) => {
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

//delete servicce
router.delete('/:id', (req, res) => {
    //check if service exists
    Service.exists({ _id: req.params.id }).then((result) => {
        if(!result){
            return res.status(400).send(`No service record with given id:${req.params.id}`);
        }else{
            Service.findByIdAndRemove(req.params.id, (err, doc) => {
                if (!err) {
                    res.send(doc);
                }else{
                    console.log(`Error: could not delete service: ` +JSON.stringify(err, undefined, 2));
                }
            });
        }
    });
});

module.exports = router;