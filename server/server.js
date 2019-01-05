const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
var User = mongoose.model('User',{
    mail: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})
var Todo = mongoose.model('Todo', {
   text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true //empth spaces 
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

var newUser = new User({
    mail: 'Talboosy@gmail.com'
});

newUser.save().then((doc)=>{
    console.log('Saved new user ', doc)
},(err)=>{
    console.log('Unable to save new user', err)
});

// var nextTodo = new Todo({
//     text: 'Look for job'
// });

// nextTodo.save().then((resul) => {
//     console.log('Saved New Todo', resul)
// },(e) =>{
//     console.log('Unable to save new todo', e)
// });