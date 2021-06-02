// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let input = require('readline-sync');
let astronautCount = Number(input.question("How many astronauts will be on this flight? "));

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
//let astronautCount =	7;
let astronautStatus =	"ready";
let averageAstronautMassKg =	80.7;
let crewMassKg =	astronautCount * averageAstronautMassKg;
let fuelMassKg =	760000;
let shuttleMassKg	 = 74842.31;
let totalMassKg =	crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius =	-225;
let fuelLevel =	100 + "%";
let weatherStatus =	"clear";
let dash = "-------------------------------------"
let kgNote = " kg"

// Write code to generate the LC04 report here:

console.log(dash);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(dash);
console.log("Date: " + date)
console.log ("Time: " + time)
console.log();

console.log(dash);
console.log("> ASTRONAUT INFO");
console.log(dash);
console.log("* count: " + astronautCount);
console.log("* status: " + weatherStatus);
console.log ()

console.log(dash);
console.log("> FUEL DATA");
console.log(dash);
console.log("* Fuel temp celsius: " + fuelTempCelsius + " C");
console.log("* Fuel level: " + fuelLevel);
console.log();

console.log(dash);
console.log("> MASS DATA");
console.log(dash);
console.log("* Crew mass: " + (averageAstronautMassKg * astronautCount) + kgNote);
console.log("* Fuel mass: " + fuelMassKg + kgNote);
console.log("* Shuttle mass: " + shuttleMassKg + kgNote);
console.log("* Total mass: " + ((averageAstronautMassKg * astronautCount) + fuelMassKg + shuttleMassKg) + kgNote);
console.log ()

console.log(dash);
console.log("> FLIGHT PLAN");
console.log(dash);
console.log("* weather: " + weatherStatus);
console.log ()

console.log(dash);
console.log("> OVERALL STATUS");
console.log(dash);
console.log("* Clear for takeoff: " + "YES");




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.