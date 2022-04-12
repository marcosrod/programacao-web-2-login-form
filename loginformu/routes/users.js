var express = require('express');
var router = express.Router();
const userController = require('../controller/userController')

router.get('/', function(req, res) {
  if (req.cookies.token === "123456789") {
    res.render('main');
  } else {
    res.render('login');
  }
});

router.post('/login', (req, res) => {
  let {username, password, remember} = req.body;
  if (userController.login(username, password)) {
    res.cookie('token', '123456789');
    res.cookie('sessionName', `${username}`);
    if (remember === "true") {
      res.cookie('username', username);
    } else {
      res.clearCookie("username");
    }
    res.render('main');
  } else {
    res.send("Credenciais Incorretas, Tente Novamente Mais Tarde.");
  }
});

router.get('/logout', function(req, res) {
  res.clearCookie("token");
  res.clearCookie("sessionName");
  return res.redirect('/');
});

router.get('/intranet', function(req, res) {
  if (req.cookies.token === "123456789") {
    res.render('main');
  }
});

router.post('/salvanome',(req, res) => {
  if (req.cookies.token === "123456789") {
    let {name} = req.body;
    if (name !== null) {
      res.clearCookie('sessionName');
      res.cookie('sessionName', `${name}`);
    }
  }
  res.redirect('/');
});

module.exports = router;
