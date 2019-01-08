//JavaScript gives you, the developer, access to an extremely powerful keyword - “this”. 
// “this” can be used to access data contextually, allowing your functions and methods to access the data that they need based on a specific context. 
// “this” is awesome, but it’s also very confusing! 
// In this workshop, we’ll go over 3 of the 4 main ways “this” can be used, and hopefully demystify it’s usage

var Portland = {
    bridges: 12,
    airport: 1,
    soccerTeams: 1,
    logNumberOfBridges: function() {
        console.log("There are " + this.bridges + " bridges in Portland!");
    }
}

Portland.logNumberOfBridges();

var myCar2 = {
    maxSpeed: 70,
    driver: "Net Ninja",
    car: "Lamborghini",
    drive: function(speed, time) {
        console.log(speed + time);
    },
    logDriver: function() {
        console.log("The driver name is " + this.driver + "." +
                    " His car is a 2019 " + this.car + ".");
    }
}

myCar2.logDriver();


