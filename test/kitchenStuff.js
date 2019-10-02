let learn = require('../'),
    kitchen = new learn.Kitchen();

let myCoffeeMachine = new learn.CoffeeMachine();

kitchen
    .openCupboard()
    .grab.someCoffeeBeans()
    .putInCoffeeMachine(myCoffeeMachine);

let mug = new learn.Mug();

myCoffeeMachine.useMug(mug);

mug.pickUpMug()
    .drinkFromMug();

learn.Me.say("Mmmm, that some good tea i got me here")
    .sayWithEmphasis()
    .sayWhileSmiling();