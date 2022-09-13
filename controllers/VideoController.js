const VideoModel = require("../models/VideoModel");

// all data videos
const getAllVideos = async (req, res) => {
  try {
    const video = await VideoModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//create video

const createVideo = async (req, res) => {
  const { title, description, url, duration, author, category, rating } =
    req.body;
  try {
    const video = await VideoModel.create({
      title,
      description,
      url,
      duration,
      author,
      category,
      rating,
    });
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get single data

const getSingleVideo = async (req, res) => {
  const { videoid } = req.params;
  try {
    const video = await VideoModel.findById(videoid).sort({ createdAt: -1 });
    if (!video) {
      return res.status(400).json({ error: "No such video." });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update video data

const updateVideo = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const videoid = req.params.videoid;

  VideoModel.findByIdAndUpdate(videoid, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Video with videoid=${videoid}. Maybe Video was not found!`,
        });
      } else res.send({ message: "Video was updated successfully." });
    })
    .catch((err) => {
      res.status(400).send({
        message: "Error updating Video with id=" + videoid,
      });
    });
};

//delete video data

const deletevideo = async (req, res) => {
  const { videoid } = req.params;
  try {
    const video = await VideoModel.findOneAndDelete(videoid);
    await video.remove();
    res.status(200).json({ message: "Video Deleted" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  createVideo,
  getAllVideos,
  getSingleVideo,
  deletevideo,
  updateVideo,
};
