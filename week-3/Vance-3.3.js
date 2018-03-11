var header = require('../header.js');
console.log(header.display("Exercise 3.3", "Gabriel", "Vance", "Singleton Pattern")); 


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/
/* singleton pattern in js program, can be implemented with class method
that creates new instance of class if one does not already exist

(creates single object at any give time)

manages visibility of an object*/
//adding 3.3 code



// start program



var DatabaseSingleton = (function() {
    var instance;
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
}
// checks to see if instance is active and if  it is, returns object
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
}
})();

//creating test function

function databaseSingletonTest(){
    var oracle=DatabaseSingleton.getInstance();
    var postgres=DatabaseSingleton.getInstance();

    console.log("Same database instance? %s", oracle ===postgres);
}

databaseSingletonTest();
/*
function databaseInit() {
    var databaseInstance1 = DatabaseSingleton.getInstance();
    var databaseInstance2 = DatabaseSingleton.getInstance();
    console.log("One database instance? " + (databaseInstance1 === databaseInstance2));
}

databaseInit();
*/


// end program