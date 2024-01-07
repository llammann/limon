const express = require("express");
const app = express();
const port = 3333;
const upload = require("./upload");
// static db
const arr = [];

// GET
app.get("/users", (req, res) => {
  res.send("Hallo!");
});

// POST
app.post("/users", upload.single("file"), (req, res) => {
  console.log("body", req.body);
  console.log("file", req.file);
  const { title } = req.body;
  const newUser = {
    title: title,
    profilPicture: req.file.path,
  };

  arr.push(newUser);

  res.json({
    message: "File uploaded successfully!",
    data: {
      title: newUser.title,
      fullPath: `http://localhost:3333/${newUser.profilPicture}`,
    },
  });
});

app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
