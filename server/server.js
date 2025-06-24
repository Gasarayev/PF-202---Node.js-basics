const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = 3000;
let people = require("./data/people");

app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    } else {
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

// DELETE method

app.delete("/people/:id", (req, res) => {
  try {
    const { id } = req.params;
    const peopleIndex = people.findIndex((p) => p.id == id);

    if (peopleIndex != -1) {
      people.splice(peopleIndex, 1);

      res.status(200).json({
        message: "remove successful",
        people: people,
      });
    } else {
      res.status(404).json({
        message: "not found with given id",
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

// POST method

app.post("/people", (req, res) => {
  try {
    const { fullName, age, nickname, img, city, description, gender } =
      req.body;

    // basic validation
    if (
      !fullName ||
      !age ||
      !nickname ||
      !img ||
      !city ||
      !description ||
      !gender
    ) {
      return res.status(400).json({
        message: "Please write all details",
        success: false,
      });
    } else {
      const newPerson = {
        id: +people[people.length - 1].id + 1,
        fullName,
        age,
        nickname,
        img,
        city,
        description,
        gender,
      };
      people.push(newPerson);
      res.status(201).json({
        data: newPerson,
        message: "New person posted successfully",
        success: true,
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

// PATCH method

app.patch("/people/:id", (req, res) => {
  const { id } = req.params;
  const { fullName, age, nickname, img, city, description, gender } = req.body;

  try {
    const person = people.find((p) => p.id == id);

    if (person) {
      // partial update
      if (fullName) person.fullName = fullName;
      if (age) person.age = age;
      if (nickname) person.nickname = nickname;
      if (img) person.img = img;
      if (city) person.city = city;
      if (description) person.description = description;
      if (gender) person.gender = gender;

      const idx = people.findIndex((p) => p.id == id);
      people.splice(idx, 1, person);

      res.status(200).json({
        message: "Person updated successfully!",
        data: person,
        success: true,
      });
    } else {
      res.status(404).json({
        message: "Person not found with given ID!",
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error!",
      success: false,
    });
  }
});

app.listen(PORT, () => {
  console.log("server runn");
});
