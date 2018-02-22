var header = require('../header.js');
console.log(header.display("Exercise 1.3", "Gabriel", "Vance", "Creates and calls object")); 


/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

 //cell phone obj constructor

//var for phone with parameters defined

 var cell = {
    manufacturer:"Google",
    model:"Pixel",
    color:"black",
    price:"$1000",

//getFunctions

    getPrice:function(){
        return this.price ;
        
    },

    getModel:function(){
        return this.model;
        
    },


   getDetails:function(){
       return "The cell phone is a " + this.color + " " + this.manufacturer + " " 
       + this.getModel() + " and it costs " + this.getPrice() + ".";
        
    }

 };

 // calls details
 console.log(cell.getDetails());

 console.log("\n")

 // coded suggested by prof krasso

 function Cellphone(manufacturer2, model2, color2, price2){
     this.manufacturer2=manufacturer2;
     this.model2=model2;
     this.color2=color2;
     this.price2=price2;

     this.getPrice2=function()
     {
         return this.price2;
     }
     this.getModel2=function()
     {
         return this.model2;
     }
     this.getDetails2=function()
     {
         return "Manufacturer:" + this.manufacturer2 + "\nModel:" + this.getModel2() + "\ncolor:" + this.color2
         + "\nPrice" + this.getPrice2();
     }
 }


var pixel= new Cellphone("Google","Pixel","black","$1000");
 console.log(pixel.getDetails2());

 


// start program





// end program