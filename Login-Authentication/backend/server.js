const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',           // MySQL username
  password: 'simha@123',  // MySQL password
  database: 'auth_db' // Database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Registration Endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error('Error during registration:', err);
      return res.status(500).send('Server error. Please try again later.');
    }
    if (results.length > 0) {
      return res.status(400).send('Username already exists.');
    }
    db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
      if (err) {
        console.error('Error inserting new user:', err);
        return res.status(500).send('Server error. Please try again later.');
      }
      res.send('Registration Successful');
    });
  });
});

// Login Endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
    if (err) {
      console.error('Error during login:', err);
      return res.status(500).send('Server error. Please try again later.');
    }
    if (results.length > 0) {
      res.send('Login Successful');
    } else {
      res.status(400).send('Invalid username or password.');
    }
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000.');
});
