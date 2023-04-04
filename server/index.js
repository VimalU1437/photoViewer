const mongoose = require("mongoose");
require("dotenv").config();

const app = require("./src/app");

const connect = async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL);
       console.log("Connected to database");

    }catch(e){
        console.log(e);
    }

}
connect();
let port = process.env.PORT;
app.listen(port, ()=>{
    console.log("connected to " + port);
})
