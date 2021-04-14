const express = require('express');
const passport = require('passport');
const _port = process.env.PORT || 3000;
//const cors = require('cors');
require('./config/config');
require('./db');
require('./config/passportConfig');



const app = express();
//app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());

const userController = require('./controllers/userController');
const serviceController = require('./controllers/serviceController');


//handle validation errors within the application
app.use((err, req, res, next) => {
    if (err.name == 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
});

app.listen(_port, (err) => {
    if (err) { throw err; }
    console.log(`Server started at port: ${_port}`)
});

app.use('/users', userController);
app.use('/services', serviceController);