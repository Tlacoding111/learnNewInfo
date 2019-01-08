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
