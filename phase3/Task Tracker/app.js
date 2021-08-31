//load the modules
let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let fs = require("fs");
const { request, response } = require("express");

//create the reference
let app = express();


//middleware
app.use(bodyParser.json());
//enable cors
app.use(cors());
let tasks = [];

app.post("/storeTask", (request, response)=>{
    let tas = request.body;
    let task = tasks.find(t=>t.taskId==tas.taskId);
    if(task == undefined){
        tasks.push(tas);
        response.json({"msg":"Task record added successfully"});
    }
    else{
        response.json({"msg":"Task ID must be unique"});
    }
    let stuff = JSON.stringify(tasks);
    fs.writeFileSync('data.json', stuff);
})

app.get("/allTasks",(request,response)=>{
    response.json(tasks);
})



app.delete("/deleteTask/:taskId", (request, response)=>{
    let taskId = request.params.taskId;
    let index = tasks.findIndex(t=>t.taskId==taskId);
    if(index == -1){
        response.json({"msg":"No Task present with ID "+taskId});
    }
    else{
        tasks.splice(index, 1);
        response.json({"msg":"Task deleted successfully"});
    }
    let stuff = JSON.stringify(tasks);
    fs.writeFileSync('data.json', stuff);
})


app.listen(9090, ()=>console.log("Server runnin on port number 9090"));