const config = require("config");
const auth = require("../middleware/auth");
const userController = require("../controllers/users");

module.exports.setRouter = app => {

    const baseUrl = `${config.get("apiVersion")}/users`;

    app.get(`${baseUrl}/profile`, auth, userController.getLoggedInUserProfile);

    app.get(`${baseUrl}`, auth, userController.getUsers);

    app.post(`${baseUrl}`, userController.signupUser);

    app.patch(`${baseUrl}/:id`, auth, userController.updateUser);

    app.get(`${baseUrl}/:id`, auth, userController.getUser);

    app.delete(`${baseUrl}/:id`, auth, userController.deleteUser);

};