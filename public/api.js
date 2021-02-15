
const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
      //fetch it's like ajax, HTTP Client, front end library method
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {//missing
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },
//match this file with AP-ROUTES missing PUT and GET 
  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();//works like the top one 

    return json;
  },
};

//there are 4 data request fetch 
//front end for client side request
//when you don't pass a method and just a URL it knows to default to get  