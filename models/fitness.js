const mongoose = require("mongoose");
//need to make this reflect the data that is being collected 
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

    exercises:[{
      type: {type: String}, //type is an object, orange is mongoose schema 
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number,
      
      //check out the read me where it discusses duration 

    }]
  });
  workoutsSchema.virtual(
    "totalDuration").get(function(){excercise.forEach(function(excercise){
      excercise.duration
    })
      return ${this.total}
      //you can use for each or math to get all the total durations for each amount 
    })
//{} these brackets add rules 
const workouts= mongoose.model("workouts", workoutsSchema);

module.exports = workouts;


//enter all the data that is captured from the UI

/*
 {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  }*/