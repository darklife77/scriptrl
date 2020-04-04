let EventEmitter = require('events').EventEmitter,
    rl = require('../../module');

class House {
    /**
     * A house. Your house. Any house.
     * @param {HouseLayout} layout
     */
    constructor(layout) {
        this._layout = layout;
        this._events = new EventEmitter();
        this._rooms = {

        }
    }

    get kitchen() {
        return new rl.Kitchen();
    }
}

module.exports.house = House;

/**
 *
 * @type {HouseLayout} {{}}
 */
let houseDefaults = {
    rooms: {
        kitchen: {
            has: [
                "bin",
                "coffeeMachine",
                "fridge",
                "freezer",
                "drainingBoard",
                "sink",
                "woodenWorktop",
                "microwave",
                "cupboards",
                {
                    name: "dishwasher",
                    nameInFunction: "dishwasher",
                    reliesOn: ["cupboards"]
                }
            ]
        }
    }
}

module.exports.defaults = houseDefaults;

/**
 * @typedef {Object} HouseLayout
 * @property {Object} rooms
 * @property {Object} rooms.kitchen
 * @property {KitchenHas[]} rooms.kitchen.has
 */

/**
 * @typedef {"coffeeMachine"|"fridge"|"freezer"|"fridgeFreezer"|"marbleWorktop"|"woodenWorktop"|"bin"|"paperBin"|"plasticBin"|"island"|"barstools"|"sink"|"drainingBoard"|"microwave"|"cupboards"|otherKitchenItem} KitchenHas
 */

/**
 * @typedef {Object} otherKitchenItem
 * @property {String} name
 * @propoerty {String} nameInFunction
 * @property {String[]|false} reliesOn
 */
