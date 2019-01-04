const mongoose = require('mongoose');

const url = 'mongodb://192.168.99.100:32768';
const dbName = 'TodoApp';

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || `${url}/${dbName}`, { useNewUrlParser: true, useFindAndModify: false });

module.exports = { mongoose };