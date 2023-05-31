const express = require('express')
const bodyParser = require('body-parser')

var cors = require('cors')
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.post("/api", (req, res) => {
    const receivedJson = req.body;
    console.log('Received JSON: ', receivedJson)
    res.send('JSON Received Successfully')
})

app.listen(3001, () => {console.log("Server started on port 3001")})
