var header = require('../header.js');
console.log(header.display("Exercise 3.2", "Gabriel", "Vance", "The Factory Pattern")); 


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

/* factory patterns creation pattern creating objects. conditionals with if statements
generic way for work flows in application

goal: add 2 additional function patterns, add 2 classes and utilize output*/


// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

// create 2 function classes oracle and informix
// add values with ||

function Oracle (properties){
    this.username = properties.username || 'hero';
    this.password = properties.password || 'hero-passowrd';
    this.server = properties.server|| 'localhost:5454';
    this.version = properties.version || '10g';
}

function Informix (properties){
    this.username = properties.username || 'sidekick';
    this.password = properties.password || 'sidekick-password';
    this.server = properties.server || 'localhost:3030';

}


// update method to include these 2 objects (oracle/informix)
function DatabaseFactory() {}
//update if statement with MySql then adding other objects
DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType ==='MySql') {
        this.databaseClass = MySql;
    }

    //adding 2 new objects
    if (properties.databaseType ==='Oracle') {
        this.databaseClass = Oracle;
    }

    if (properties.databaseType ==='Informix') {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

// add 2 additional databasefactory objects
//call create databse functions w/ falues
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: 'Oracle',
    username: "username",
    password: "password"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: 'Informix',
    username: "username",
    password: "password"
});



//console.log functions with objects

console.log(oracle);
console.log(informix);
// end program


