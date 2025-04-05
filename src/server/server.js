import express from "express";
import cors from "cors";
import multer from "multer";
const app = express();
const PORT = 8080;

app.use(cors());

const uploadDir = "storage";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), async (req, res) => {
  res.sendStatus(200);
  console.log("Received a request");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
