const express = require("express");
require("./config.js");
const Product = require("./product.js");

const app = express();

app.use(express.json());

app.get("/search/:key", async (req, res) => {
  let data = await Product.find({
    "$or": [
        { "name": { $regex: req.params.key } },
        { "brand": { $regex: req.params.key } }
    ],
  });
  res.send(data);
});

app.listen(5000);
