const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://192.168.99.100:32768';
const dbName = 'TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db(dbName);

    //tenim tres formes de borrar documents

    //deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({ name: 'Jordi' }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5c2cc1cb1f442e3c5414417c') }).then((result) => {
        console.log(result);
    });

    //client.close();
});