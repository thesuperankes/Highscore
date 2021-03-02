const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var auth = require('./api/auth');
var games = require('./api/games');
var table = require('./api/table');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/auth',auth);
app.use('/games',games);
app.use('/table',table);

app.get('/', function (req, res) {
    return res.send({test:'Hi'});
});

app.listen(process.env.PORT || 8080, function () {
    console.log('Zhopio app listening on port 8080!');
});
