const express = require("express");
const {
  createVideo,
  getAllVideos,
  getSingleVideo,
  deletevideo,
  updateVideo,
} = require("../controllers/VideoController");
// const VideoModel = require("../models/VideoModel");

//express app
const router = express();

//list of videos
router.get("/", getAllVideos);

//create video
router.post("/", createVideo);

//get single video
router.get("/:videoid", getSingleVideo);

//update video
router.put("/:videoid", updateVideo);

//delete video
router.delete("/:videoid", deletevideo);

module.exports = router;
