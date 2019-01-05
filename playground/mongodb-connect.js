// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var user = {name: 'Tal', age: '25'};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Tal Boosy',
    //     age: '25',
    //     location: 'Rosh Haayin Israel'
    // },(err, result) => {
    //     if(err){
    //         return console.log('Unable to insert User',err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    client.close();
});