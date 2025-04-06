import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
const app = express();
const PORT = 8080;
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDestination = `storage/${req.body.folderName}` ?? `storage`;

    if (!fs.existsSync(uploadDestination)) {
      fs.mkdirSync(uploadDestination);
    }

    cb(null, uploadDestination);
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.array("files"), async (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
