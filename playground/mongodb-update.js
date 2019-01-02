const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://192.168.99.100:32768';
const dbName = 'TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db(dbName);

    // db.collection('Todos').findOneAndUpdate({ 
    //     _id: new ObjectID('5c2cc6d2912e9318c4b1d1cf') 
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({ 
        _id: new ObjectID('5c2cb1329b99ff25383fd1c7') 
    }, {
        $set: {
            name: 'Jordi'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //client.close();
});