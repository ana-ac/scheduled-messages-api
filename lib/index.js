// dependencies
const express = require('express');

module.exports = async () => {
    // requirements
    const conf = require("./../conf");
    const models = require('./models')();
    const services =  require('./services')(models);
    const { route } = require('./routes')(
        conf,
        services
    );

    const app = express();
    route(app);

    return app;
};
