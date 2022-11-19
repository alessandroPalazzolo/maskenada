// EXTERNAL IMPORT
const express = require("express");
const path = require('path');

// LOCAL IMPORT
const cors = require('./middleware/cors');

// DECLARATIONS
const app = express();
const port = process.env.PORT || 5000;
const pathToClientBuild = path.resolve(__dirname, 'client/build');
const pathToClientEntryPoint = path.resolve(__dirname, 'client/build/index.js')

// LOGIC
app.use(cors);

app.use(express.static(pathToClientBuild));

app.get('/', express.static(pathToClientEntryPoint));

app.listen(port, () => console.log('Listening on port ' + port));