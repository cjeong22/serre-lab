const express = require('express')

var cors = require('cors')
var app = express();

app.use(cors())
app.post("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.listen(3001, () => {console.log("Server started on port 3001")})
