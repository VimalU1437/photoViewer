const express = require("express");

const app = express();
const cors = require("cors");
const PhotoModel = require("./model/photoModel");

app.use(cors());
app.use(express.json());

app.get("/",async(req,res)=>{
    try{
        const data = await PhotoModel.find().sort({_id:-1});
        // console.log(data); 
        res.json(data);
        
    }catch(e){
        console.log(e);

        res.sendStatus(500);

    }
})

app.post("/",async(req,res)=>{
    try{
        let body = req.body;
        console.log(body); 
        let data = await PhotoModel.create(body);
        res.status(201).json(data);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
        
    }
})

app.delete("/:id",async(req,res)=>{
    try{
        let param = req.params;
        console.log(param);
        let data = await PhotoModel.deleteOne({_id:param.id});
        console.log(data);
        res.status(201).json(data);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
        
    }
})

app.use("*",(req,res)=>{
    res.sendStatus(404);
})

module.exports = app;