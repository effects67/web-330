var header = require('../header.js');
console.log(header.display("Exercise 2.2", "Gabriel", "Vance", "Creates prototype")); 


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/
//create object literal person with one function getAge

var person= {
    getAge: function(){
        // calls person's age
        console.log("The person's age is '"+ this.age + ".'");   
    }
};
// this will input the values into the original function
// producing the name after the age
    var info=Object.create(person, {
        "age":{
            "value":"Your Age Here",
            enumerable:true
        },
        "name":{
            "value": "Your Name Here"
        }
    });

    // call age
    info.getAge();
    // call name
    console.log("The peron's full name is '" + info.name + ".'");


// start program





// end program


