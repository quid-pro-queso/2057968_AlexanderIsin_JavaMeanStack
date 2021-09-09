let express = require("express");

let router = express.Router();
let chatController = require("../controller/chat.controller");
router.post("/addChat", chatController.storeChatInfo );


module.exports=router;