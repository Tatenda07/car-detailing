const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
//const jwtHelper = require('./..config/jwtHelper');
const _ = require('lodash');
require('../models/customer.model')

const Customer = mongoose.model('Customer');

//add new customer
router.post('/', (req,res, next) => {
    const newCustomer = new Customer(req.body);

    newCustomer.save((err, doc) => {
        if(!err) 
            res.send(doc);
        else
            return next(err);
    });
});

//list all customers
router.get('/', (req, res) => {
    Customer.find((err, docs) => {
        if(!err){
            res.send(docs);
        }else {
            console.log('Error in retrieving customers: ' + JSON.stringify(err, undefined, 2));
        }
    });
});

//retrieve single customer 
router.get('/:id', (req, res) => {
    //check is customer exists
    Customer.exists({ _id: req.params.id}).then((result) =>{
        if(!result) {
            return res.status(400).send(`No customer record with given id: ${req.params.id}`);
        }else{
            Customer.findById(req.params.id, (err, doc) => {
                if(!err)
                    res.send(doc);
                else
                    console.log('Error in retrieving customer record: ' + JSON.stringify(err, undefined, 2));
            });
        }
    });
});

//edit or update customer information
router.patch('/:id', (req, res, next) => {
    //check if customer exists
    Customer.exists({ _id: req.params.id}).then((result) => {
        if(!result) {
            return res.status(400).send(`No customer record with given id: ${req.params.id}`);
        }else{
            //fetch customer record
            Customer.findById(req.params.id, (err, post) => {
                if(err) return next(err);

                //update with lodash
                _.assign(post, req.body);
                post.save((err) => {
                    if(err) return next(err);

                    return res.status(200).json(post);
                })
            });
        }
    });
});

//delete customer 
router.delete('/id:id', (req, res) => {
    //check is customer exists
    Customer.exists({ _id: req.params.id}).then((result) => {
        if(!result){
            return res.status(400).send(`No customer record with given id: ${req.params.id}`);
        }else{
            Customer.findByIdAndRemove(req.params.id, (err, doc) => {
                if(!err) {
                    res.send(doc);
                }else{
                    console.log('Error: could not delete the customer: ' + JSON.stringify(err, undefined, 2));
                }
            });
        }
    });
});

module.exports = router;
