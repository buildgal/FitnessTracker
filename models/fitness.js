const mongoose = require("mongoose");
//need to make this reflect the data that is being collected 
const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

    exercises:[{
      type: {type: String},
      name: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number,
    }]
  });
  /*
  workoutsSchema.virtual(
    "totalDuration").get(function(){excercise.forEach(function(excercise){
      excercise.duration
    })
      return ${this.total}
      //you can use for each or math to get all the total durations for each amount 
    })
//{} these brackets add rules 
*/
const workouts= mongoose.model("workouts", workoutsSchema);

module.exports = workouts;
