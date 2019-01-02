//const MongoClient = require('mongodb').MongoClient;
//si utilitzem la sintaxis de "destructuring ojects ES6" podem fer el següent:
const {MongoClient, ObjectID} = require('mongodb');
//si declarem les variables amb {} el que fem es que les variables prenguin el valor especficat de la propietat de l'objecte.
//mes info a https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const url = 'mongodb://192.168.99.100:32768';
const dbName = 'TodoApp';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db(dbName);

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Jordi',
        age: 38,
        location: 'Barcelona'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});