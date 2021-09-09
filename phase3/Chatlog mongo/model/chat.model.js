let mongoose = require("mongoose");

mongoose.pluralize(null);

let chatSchema = mongoose.Schema({
    cname:String,
    chat:String
})

let chatModel = mongoose.model("Chat", chatSchema);

module.exports=chatModel;