var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var usersRouter = require('./routes/users');

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const usersRoute = require('./routes/users');

app.set('view engine', 'ejs');
app.set('views', "./views");
app.use('/',usersRouter);

app.use((req, res) => {
    res.send('404: Página não encontrada')
})




app.listen(3000);

module.exports = app;