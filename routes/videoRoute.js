const express = require("express");
const {
  createVideo,
  getAllVideos,
  getSingleVideo,
  deletevideo,
  updateVideo,
} = require("../controllers/VideoController");
const requireAuth = require("../middelware/requireAuth");
// const VideoModel = require("../models/VideoModel");


//express app
const router = express();


//middleware
// router.use(requireAuth)



//list of videos
router.get("/", getAllVideos);

//create video
router.post("/", requireAuth,createVideo);

//get single video
router.get("/:videoid", getSingleVideo);

//update video
router.put("/:videoid", updateVideo);

//delete video
router.delete("/:videoid", deletevideo);

module.exports = router;
