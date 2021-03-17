const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decode = jwt.verify(token, config.get('jwtPrivateKey'));
        req.loggedInUser = decode;
        req.token = token
        next();
    } catch(err) {
        res.status(401).send({ error: 'Please Authenticate.' });
    }
};