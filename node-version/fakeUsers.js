require('dotenv').config()

const mysql = require('mysql'),
      faker = require('faker');

const connection = mysql.createConnection({
  host: 'www.db4free.net',
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

let person = [];

for (let i = 0; i < 500; i++) {
  person.push([faker.internet.email()]);
}

let q = 'INSERT INTO users (email) VALUES ?';
connection.query(q, [person], (err, result) => {
  if (err) throw err;
  console.log(result);
});

connection.end();