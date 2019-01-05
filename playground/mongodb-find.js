const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp')

    // db.collection('Todos').find({_id}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err)=> {
    //     console.log('Unable to fetch todos',err);
    // });
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count:${count}`);
    // }, (err)=> {
    //     console.log('Unable to fetch todos',err);
    // });

    db.collection('Users').find({name: 'Tal Boosy'}).toArray().then((docs)=>{
        console.log('Name:');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err)=>{
        console.log('Unable to fetch data',err);
    });

   // client.close();
});