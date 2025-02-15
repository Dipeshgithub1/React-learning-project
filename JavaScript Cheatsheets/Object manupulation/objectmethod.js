//object method

const car = {
    "make":"Toyota",
    "model":"camry",
    start: function(){
        console.log("engine started");
    },
    stop(){
        console.log("engine stopped");
    },
};
//console.log(car.start());
//console.log(car.stop());
car.start();
car.stop();