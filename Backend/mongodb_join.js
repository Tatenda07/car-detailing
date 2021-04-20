var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Joelson:Joe7MongoDB@initial-cluster.vie6y.mongodb.net/car-detailing?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection('customer_services_booking').aggregate([
        {$lookup:
            {
                from: 'customer',
                localField: 'customerId',
                foreignField: 
            }
        }
    ])
})