const express = require("express");
const app = express();
require("./db/conn");
const category = require("./model/Category");
const comment = require("./model/Comment");
const image = require("./model/Image");
const tutorial = require("./model/Tutorial");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome");
});

app.post("/addData", async (req, res) => {
  try {
    const { username, description } = req.body;
    const cate = new category({ username, description });

    const data = await cate.save();
    if (data) {
      return res
        .status(200)
        .json({ message: "Category Data saved succesfuuly" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/addComment", async (req, res) => {
  try {
    const { username, text } = req.body;
    const come = new comment({ username, text });

    const data = await come.save();
    if (data) {
      return res
        .status(200)
        .json({ message: "Category Data saved succesfuuly" });
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/addImage", async (req, res) => {
  try {
    const { path, caption } = req.body;
    const ima = new image({ path, caption });

    const data = await ima.save();
    if (data) {
      return res
        .status(200)
        .json({ message: "Category Data saved succesfuuly" });
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/addtut", async (req, res) => {
  try {
    const { title, author, image, comments, category } = req.body;
    const ima = new tutorial({ title, author, image, comments, category });

    const data = await ima.save();
    if (data) {
      return res.status(200).json({ message: "tut Data saved succesfuuly" });
    }
  } catch (err) {
    console.log(err);
  }
});
//647789abe5c86170dc45a472
// const userExist = await user.findOne({ email: email });
app.get("/search/:id", async (req, res) => {
  try {
    const ima = await tutorial.findOne({ category: req.params.id });

    if (ima) {
      return res.status(200).send(ima);
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(8080, () => {
  console.log("server listing to port 8080");
});
