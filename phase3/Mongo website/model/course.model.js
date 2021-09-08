let mongoose = require("mongoose");

mongoose.pluralize(null);

let courseSchema = mongoose.Schema({
    _cid:Number,
    cname:String,
    desc:String,
    amt:Number
})

let courseModel = mongoose.model("Course", courseSchema);

module.exports=courseModel;