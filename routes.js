const express = require("express");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const errorHandler = require("errorhandler");

const routesPath = "./routes";

module.exports = app => {

    app.use(helmet());
    app.use(errorHandler());
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(morgan('dev'));

    fs.readdirSync(routesPath).forEach(file => {
        if (~file.indexOf('.js')) {
            let route = require(routesPath + '/' + file);
            route.setRouter(app);
        }
    })
};