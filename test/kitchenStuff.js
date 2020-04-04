let rl = require('../'),
    house = new rl.House(rl.defaults.house),
    kitchen = house.kitchen;

let myCoffeeMachine = new rl.CoffeeMachine();

kitchen
    .openCupboard()
    .grab.someCoffeeBeans()
    .putInCoffeeMachine(myCoffeeMachine);

let mug = new rl.Mug();

myCoffeeMachine.useMug(mug);

mug.pickUpMug()
    .drinkFromMug();

rl.Me.say("Mmmm, that some good tea i got me here")
    .sayWithEmphasis()
    .sayWhileSmiling();
