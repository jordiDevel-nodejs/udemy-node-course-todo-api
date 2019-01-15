const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'jimbo@example.com',
    password: 'useronepass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: userOneId, access: 'auth' }, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'jambo@example.com',
    password: 'usertwopass'
}];

const todos = [{
    _id: new ObjectID(),
    text: 'First todo test'
}, {
    _id: new ObjectID(),
    text: 'Second todo test',
    completed: true,
    completedAt: 765
}];

const populateTodos = (done) => {
    Todo.deleteMany({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.deleteMany({}).then(() => {
        const userOne = new User(users[0]).save();
        const userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

module.exports = { todos, populateTodos, users, populateUsers };
