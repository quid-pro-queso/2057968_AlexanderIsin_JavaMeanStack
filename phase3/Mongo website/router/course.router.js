let express = require("express");

let router = express.Router();
let courseController = require("../controller/course.controller");
router.get("/getAllCourses", courseController.getAllCourseDetails);
router.post("/storeCourse", courseController.storeCourseInfo );
router.delete("/deleteCourse/:cid", courseController.deleteCourseDetails);
router.put("/updateCourse", courseController.updateCourseDetails);

module.exports=router;