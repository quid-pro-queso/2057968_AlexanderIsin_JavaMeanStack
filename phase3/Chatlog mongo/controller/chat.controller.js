let chatModel = require("../model/chat.model");

let storeChatInfo = (request, response)=>{
    let course = request.body;

    chatModel.insertMany(course, (err, result) =>{
        if(!err){
            response.send("Record stored successfully")
        }else{
            response.send(err);
        }
    })
}

module.exports={storeChatInfo}