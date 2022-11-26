// EXTERNAL IMPORT
const express = require("express");
const path = require('path');
const mongoose = require("mongoose");

// LOCAL IMPORT
const cors = require('./middleware/cors');
const HttpError = require("./models/HttpError");
const adminRoutes = require("./routes/admin-routes");
const userRoutes = require("./routes/user-routes");

// DECLARATIONS
const app = express();
const port = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI || 'mongodb://127.0.0.1:27017/maskenada';
const pathToClientBuild = path.resolve(__dirname, 'client/build');
const pathToClientRouter = path.resolve(__dirname, 'client/build/index.js')

// MAIN
app.use(cors);

app.use(express.static(pathToClientBuild));
app.get('/', express.static(pathToClientRouter));

app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);

// ERROR HANDLING
app.use((req, res, next) => {
    next(new HttpError('Resource not found', 404))
});

app.use((err, req, res, next) => {
    if (res.headerSent){
        return;
    }

    res
    .status(err.errorCode || 500)
    .json({'Message': err.message} || 'Internal server error');
});

mongoose
    .connect(DB_URI)
    .then(() => {
        app.listen(port, () => console.log('Listening on port ' + port));
    })
    .catch(err => {
        console.log("Database connection error: " + err.message)
    });