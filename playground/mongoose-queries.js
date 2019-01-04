const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');

const {User} = require('./../server/models/user.js');

User.findById('5c2cdfc21142500f148cda20').then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User By Id', user);
}).catch((ex) => console.log(ex));

// const id = '5c2e2da192c3ba2f9832d25c';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id //amb moongoose no cal convertir un String en un ObjectID
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((ex) => console.log(ex));