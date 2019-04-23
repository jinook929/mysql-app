require('dotenv').config()

const express = require('express'),
  app = express(),
  mysql = require('mysql'),
  bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const connection = mysql.createConnection({
  host: 'www.db4free.net',
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) throw err
  console.log('You are now connected to DB...')
})

app.get('/', (req, res) => {
  let q = "SELECT COUNT(*) AS count FROM users";
  connection.query(q, (err, results) => {
    if (err) throw err;
    let count = results[0].count;
    res.render('home', { count: count });
  })
})

app.post('/register', (req, res) => {
  let person = {
    email: req.body.email
  };
  connection.query('INSERT INTO users SET ?', person, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
})

app.listen(process.env.PORT || 8080, function () {
  console.log("Server running!");
});