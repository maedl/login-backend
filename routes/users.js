var express = require('express');
var router = express.Router();

let users = [
  {
    username: 'Amanda',
    password: 'lösenord',
    id: 1
  },
  {  
    username: 'Max',
    password: 'pword',
    id: 2
  }
]

router.post('/login', function(req, res) {
  const user = req.body.username;
  const pw = req.body.password;

  let answer = {
    loggedIn: false,
    user: '',
    id: ''
  }

  for (let i = 0; i < users.length; i++) {
    if (user === users[i].username && pw === users[i].password) {
      answer.loggedIn = true;
      answer.user = users[i].username;
      answer.id = users[i].id;
    }
  }
  res.json(answer);
});

router.post('/logout', function(req, res) {
  let answer = {
    loggedIn: false,
    user: '',
    id: ''
  }
  res.json(answer);
});

module.exports = router;
