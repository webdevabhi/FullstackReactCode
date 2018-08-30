const express = require('express');
const mongoose = require('mongoose');
const keys = require("./config/keys");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);
app.route('/*').get(function (req, res) {
    res.send({ status: 'OK' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});