const jwt = require("jsonwebtoken");
const HttpError = require("../models/HttpError");

if (!process.env.NODE_ENV == "production"){
    require("dotenv").config();
}

const { TOKEN_SIGNATURE_STRING } = process.env;

const auth = (req, res, next) => {
    if (req.method == "OPTIONS") {
        return next();
    }

    try {
        const token = req.headers.authorization.split(" ")[1];

        if (!token) {
            return next(new HttpError("Authentication failed", 401));
        }

        const parsedToken = jwt.verify(token, TOKEN_SIGNATURE_STRING);
        req.userData = parsedToken;
        next();
    } catch(err) {
        return next(new HttpError("Authentication failed", 401));
    }
}

module.exports = auth;