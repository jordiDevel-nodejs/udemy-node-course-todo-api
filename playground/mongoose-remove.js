const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

//DeprecationWarning: collection.remove is deprecated. Use deleteOne, deleteMany, or bulkWrite instead.
Todo.remove({}).then((result) => {
    console.log(result);
});

// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove({}).then((todo) => {
//     console.log(todo);
// });

// Todo.findByIdAndRemove('5c2f7f65ef3b723cc0504271').then((todo) => {
//     console.log(todo);
// });
