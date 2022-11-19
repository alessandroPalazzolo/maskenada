const cors = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requestd-With, Content-Type, Authorization, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, PATCH, DELETE, POST");
    next();
 }
 
 module.exports = cors;