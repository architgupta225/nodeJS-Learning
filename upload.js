const express = require("express");
const multer = require("multer");
const app = express();

app.use(express.json());

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, res, cb)
      {
        cb(null, "uploads");
      },
      filename: function (req, file, cb) {
        cb(null,file.originalname+"-"+Date.now() + ".jpg" );
      }
  }),
}).single("user_file")

app.post("/upload",upload, async (req, res) => {
  res.send("Uploaded");
});

app.listen(5000);
