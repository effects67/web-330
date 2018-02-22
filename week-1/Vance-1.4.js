var header = require('../header.js');
console.log(header.display("Exercise 1.4", "Gabriel", "Vance", "Creates and calls object")); 


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

//con  classes with parameters

function Car(model){
    this.model=model;
}
//prototype function start
Car.prototype.start=function(){
        console.log("Car added to the racetrack!");
    }


function Truck(model, year){
    this.model=model;
    this.year=year;
}
    Truck.prototype.start=function(){
        console.log("Truck added to the racetrack!");

}

function Jeep(model, year, color){
    this.model=model;
    this.year=year;
    this.color=color;
}
    Jeep.prototype.start=function(){
        console.log("Jeep added to the racetrack!");
}


// empty racetrack array
var racetrack= [];


//driveIt function
function driveIt(vehicle) 
{
   vehicle.start();
    racetrack.push(vehicle);
    }

// vehicle objects
var honda = new Car("Accord");
var monster = new Truck("Big","2018");
var cherokee =new Jeep("Cherokee","2018","red");


//vehicle classes
driveIt(Car);
driveIt(Jeep);
driveIt(Truck);

//display racetrack
console.log("\n -- Added to the racetrack --")
for (var k=0;k<racetrack.length;k++){
        console.log(racetrack[k].constructor.name+":"+racetrack[k].model);
    }


// end program

