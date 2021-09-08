let courseModel = require("../model/course.model");

let getAllCourseDetails = (request, response) =>{
    courseModel.find({},(err, data)=>{
        if(!err){
            response.json(data);
        }else{
            response.json(err);
        }
    })
}

let storeCourseInfo = (request, response)=>{
    let course = request.body;

    courseModel.insertMany(course, (err, result) =>{
        if(!err){
            response.send("Record stored successfully")
        }else{
            response.send(err);
        }
    })
}

let deleteCourseDetails = (request,response)=>{
    let cid = request.params.cid;
    courseModel.deleteOne({_cid:cid}, (err, result)=>{
        if(!err){
            response.send(result);
        }else{
            response.send(err);
        }
    })
}

let updateCourseDetails = (request, response)=>{
    let course = request.body;
    courseModel.updateOne({_cid:course._cid}, {$set:{amt:course.amt}}, (err, result)=>{
        if(!err){
            response.send(result);

        }else{
            response.send(err);
        }
    })
}

module.exports={getAllCourseDetails, storeCourseInfo, deleteCourseDetails, updateCourseDetails}
