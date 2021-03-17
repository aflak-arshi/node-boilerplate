const Sequelize = require("sequelize");
const config = require("config");

const sequelize = new Sequelize(config.get('dbDetails.databaseName'), config.get('dbDetails.dialect'), config.get('dbDetails.password'), {
    host: config.get('dbDetails.host'),
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize.authenticate()
    .then(db => {
        console.log(`Connection has been established successfully.`);
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;