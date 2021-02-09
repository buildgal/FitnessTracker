const router = require("express").Router();
const workout = require("../models/fitness.js");

router.post("/api/index", ({ body }, res) => {
  workouts.create(body)
    .then(dbworkouts => {
      res.json(dbworkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/excercise", ({ body }, res) => {
  workouts.insertMany(body)
    .then(dbworkouts => {
      res.json(dbworkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  workouts.find({})
    .sort({ date: -1 })
    .then(dbworkouts => {
      res.json(dbworkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
