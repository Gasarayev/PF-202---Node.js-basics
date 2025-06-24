const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = 3000;
const people = require("./data/people");

app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

// GET all data
app.get("/people", (req, res) => {
  try {
    res.status(200).json({
      message: "Our famous peoples' get request successfully",
      success: true,
      data: people,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "server error",
      success: false,
      data: null,
    });
  }
});

// GET data by id

app.get("/people/:id", (req, res) => {
  try {
    const { id } = req.params;
  const person = people.find((p) => p.id == id);

  if (person) {
    res.status(200).json({
      message: "Our famous peoples' get request successfully",
      success: true,
      data: person,
    });
  }else{
     res.status(404).json({
      message: "Famous person is not found",
      success: false,
      data: null,
    });
  }
  } catch (error) {
    res.status(500).json({
      message: error.message || "server error",
      success: false,
      data: null,
    });
  }
});

app.listen(PORT, () => {
  console.log("server runn");
});
