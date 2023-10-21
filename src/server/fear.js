const express = require('express');
const mysql = require('mysql2');
let cors = require("cors");
const app = express();
app.use(cors());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'G4nX5fkaaXpBz64739ZS',
  database: 'dassist_schema',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err);
    return;
  }
  console.log('Connected to MySQL');
});

// Define a route to retrieve and display college names
app.get('/colleges', (req, res) => {
  // Perform a simple query to select college names
  db.query('SELECT college_name FROM college', (err, results) => {
    if (err) {
      console.error('Error querying the database: ' + err);
      res.status(500).send('Error querying the database');
      return;
    }

    // Send the results as JSON
    res.json(results);
  });
});

// Start the Express server
app.listen(4120, () => {
  console.log('Server is running on port 4000');
});