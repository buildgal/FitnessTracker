const router = require("express").Router();
const workouts = require("../models/fitness.js");

router.post("/api/workouts", ({ body }, res) => {
  workouts.create(body)
    .then(dbworkouts => {
     res.json(dbworkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", ({ body }, res) => {
  workouts.find({})
  .sort({ date: -1 })
  .then(dbworkouts => {
    res.json(dbworkouts);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

//match to the front api routes 
//cannot put + id to express uses :id
router.put("/api/workouts/:id", (req, res) => {
  const id= req.params.id;
  const workout= req.body;
  workouts.findByIdAndUpdate(
    id,
    {$push: {dbworkouts: workout}},
    {new:true})
   
    .then(dbworkouts => {
      res.json(dbworkouts);
      console.log(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  workouts.find({})
    .sort({ date: -1 })
    .then(dbworkouts => {
      res.json(dbworkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
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