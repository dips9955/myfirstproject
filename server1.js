const express = require('express');
const mysql = require('mysql');

const app = express();

const bodyParser = require('body-parser');

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


});
app.listen(4000,'0.0.0.0',() => {
        console.log('strat 4000')
});
