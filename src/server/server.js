import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/upload", async (req, res) => {
  res.sendStatus(200);
  console.log("Received a request");
});
