const config = require("config");
const roleController = require("../controllers/roles");

module.exports.setRouter = app => {
    const baseUrl = `${config.get("apiVersion")}/roles`;

    app.get(`${baseUrl}`, );
    
}