var express = require('express');
var cors = require('cors');

require('./config/config');


var menus = require('./routes/menus');

var app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());

app.use('/menu', menus);


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});

module.exports = app;