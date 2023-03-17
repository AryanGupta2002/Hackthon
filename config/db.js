const mongoose  = require('mongoose');
const my_db =process.env.MONGO_URL;


const connect = ()=>{
    mongoose.connect("mongodb+srv://cyborg:yns2e7BKhmBOniog@cluster0.cix7nm8.mongodb.net/test",{
         useNewUrlParser:true,
         useUnifiedTopology:true,
    });
    const db=mongoose.connection;
    db.on('error',console.error.bind(console,"connection error:"));
    db.once('open',()=>{
        console.log("DB connected....");
    });
}
module.exports = connect; 