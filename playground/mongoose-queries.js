const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
// var id = '6c3209c17b19c235dca78abd';
var userid = '5c30e8f13743ba97a8d2e3c7';
User.findById(userid).then((user)=>{
    if(!user){
        return console.log('User not found');
    }
    console.log('user by id', JSON.stringify(user,undefined,2));
}).catch((err)=>console.log(err));
// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('ID not found')
//     }
//     console.log('Todo by id', todo);
// }).catch((e)=>console.log(e));