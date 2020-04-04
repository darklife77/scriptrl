module.exports = {
    House: require('./src/areas/house').house,
    Kitchen: require('./src/rooms/kitchen'),
    defaults: {
        house: require('./src/areas/house').defaults
    }
};
