const mongoose = require('mongoose');

const url = 'mongodb://192.168.99.100:32768';
const dbName = 'TodoApp';

mongoose.Promise = global.Promise;

mongoose.connect(`${url}/${dbName}`, { useNewUrlParser: true });

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// const newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (err) => {
//     console.log('Unable to save todo', err);
// });

// const anotherTodo = new Todo({
//     text: 'Buy macheroni',
//     completed: false,
//     completedAt: 33
// });

// anotherTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (err) => {
//     console.log('Unable to save todo', err);
// });

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

const oneUser = new User({
    email: 'jordi@example.com'
});

oneUser.save().then((doc) => {
    console.log('Saved user', doc);
}, (err) => {
    console.log('Unable to save user', err);
});