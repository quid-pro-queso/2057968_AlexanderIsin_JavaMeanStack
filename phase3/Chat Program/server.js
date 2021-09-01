//Load the express module
let express = require("express");

//create the reference of express module
let app = express();

//Then load the express-ws module and create the reference of express-ws with the help of express reference using IIFE
let ws = require ("express-ws")(app);

app.get("/",(request, response)=>{
    response.sendFile(__dirname+"/chat.html");
})

app.ws("/",(socket, request)=>{
    console.log("Client Connected");

    //recieve message from client application  (index.html)
    socket.on("message",(data)=>{
        console.log(data)
        if(data == "Hello Server, I am Chat bot App!"){
            socket.send("How are you today?");
        }
        else{
            let num = Math.floor(Math.random() * 5);
            switch(num){
                case 0:
                    socket.send("That's great to hear!");
                    break;
                case 1:
                    socket.send("This is a wonderful program that continue talking to you for hours!");
                    break;
                case 2:
                    socket.send("My responses are random, type again if you'd like to recieve another one!");
                    break;
                case 3:
                    socket.send("Akash is a wonderful teacher, I would ask him about any technical questions.");
                    break;
                case 4:
                    socket.send("Sorry, I am a program and are therefore incapable of emotion");
            }
        }
    })

    socket.send("Hello Client, You are connected to the Socket Server App!");
})

app.listen(9090, ()=>console.log("Server running on port number 9090"));