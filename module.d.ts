export as namespace learn

export class Kitchen {
    openCupboard(): Cupboard
}

class Cupboard {
    grab: Grab
}

class Grab {
    someCoffeeBeans(): {
        putInCoffeeMachine(coffeeMachine: CoffeeMachine)
    }
}

class CoffeeMachine {
    useMug(mugToUse: Mug)
    pourIntoMug(mugToUse: Mug)
}

export class Mug {
    pickUpMug(): Mug
    drinkFromMug()
}

export namespace Me {
    function say(whatToSay: String): Speech;
}

export class Speech {
    sayWithEmphasis(): Speech
    sayWhileSmiling(): Speech
}