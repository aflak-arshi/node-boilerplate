const Joi = require("joi");
const User = require("../models").Users;

module.exports.getUsers = async (req, res) => {
    try {

    } catch(err) {
        console.log(err);        
    }
};

module.exports.signupUser = async (req, res) => {
    try {
        // const { error } = validate(req.body);
        // if (error) return res.status(400).send({ message: error.details[0].message });
    
        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send({ message: "User already registered."});
    
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    
        user = await User.create(req.body);
        res.send({
            user,
            message: "User created successfully."
        });
    } catch(err) {
        console.log(err);
    }
};

module.exports.loginUser = async (req, res) => {
    try {
        const { error } = validateLogin(req.body); 
        if (error) return res.status(400).send({ message: error.details[0].message });

        let user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).send('Invalid email or password.');
    
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('Invalid email or password.');
    
        const token = jwt.sign(
            {
            id: user.id,
            name: user.name,
            email: user.email
            },
            config.get("jwtPrivateKey")
        );
        res.send(token);
    } catch(err) {
        console.log(err);
    }
};

module.exports.updateUser = async (req, res) => {
    try {

    } catch(err) {
        console.log(err);
    }
};

module.exports.getUser = async (req, res) => {
    try {

    } catch(err) {
        console.log(err);
    }
};

module.exports.deleteUser = async (req, res) => {
    try {

    } catch(err) {
        console.log(err);   
    }
};

module.exports.getLoggedInUserProfile = async (req, res) => {
    try {

    } catch(err) {
        console.log(err);
    }
};


function validateSignup(req) {
    const schema = Joi.object({
        firstName: Joi.string().max(255).required(),
        lastName: Joi.string().max(255).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required(),
        dob: Joi.date().allow(null),
        address1: Joi.string().required(),
        address2: Joi.string().allow(""),
        state: Joi.string().allow(""),
        zipCode: Joi.string().allow(""),
        gender: Joi.string().allow(""),
        roleId: Joi.string().required(),
        hubPointId: Joi.string().required(),
        resetPasswordToken: Joi.string().allow(""),
        resetPasswordExpire: Joi.string().allow(""),
        isUserActive: Joi.boolean()
    });

    return schema.validate(req);
};

function validateLogin(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required() 
    };

    return Joi.validate(req, schema);
}
