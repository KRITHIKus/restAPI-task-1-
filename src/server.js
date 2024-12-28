const express = require("express");
const dotenv = require("dotenv");
const eventRoutes = require("./routes/eventRoutes");
const { connectDB } = require("./config/db");
const errorHandler = require("./utils/errorHandler");
const multer = require("multer");
const path = require("path");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage: storage });

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("uploads")); 

app.use("/api/v3/app", eventRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
