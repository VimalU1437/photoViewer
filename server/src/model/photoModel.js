const mongoose = require("mongoose");

const photoSchema = mongoose.Schema({
    name:{type:String,required:true},
    url:{type:String,require:true}
})

const PhotoModel = mongoose.model("photo",photoSchema);

module.exports = PhotoModel;