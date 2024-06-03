const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/task-manager',{
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})
.then(()=>{
        console.log('connected to MongoDb');
        //start your application or perform additional operations
    })
.catch((error)=>{
        console.error('Error connecting to MongoDb:',error);
    });