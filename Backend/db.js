const mongoose = require('mongoose');
require('dotenv/config');

//const url = `mongodb+srv://Joelson:Joe7MongoDB@initial-cluster.vie6y.mongodb.net/car-detailing?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(process.env.DB_Connection, connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


//to connect to local database:
// mongoose.connect('mongodb://localhost:27017/car-detailing', (err) => {
//     if (!err)
//         console.log('Connection succeeded!!!');
//     else
//         console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
// });

// module.exports = mongoose;