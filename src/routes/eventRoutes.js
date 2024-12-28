const express = require("express");
const multer = require("multer");
const {
  getEventById,
  getLatestEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventControllers");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });
 
// event routes
router.get("/events/:id", getEventById);
router.get("/events", getLatestEvents);
router.post("/events", upload.single("image"), createEvent); 
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

module.exports = router;
