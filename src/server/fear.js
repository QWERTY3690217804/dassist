const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 8000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "G4nX5fkaaXpBz64739ZS",
  database: "dassist_schema"
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

app.get('/api/college/:college_id', (req, res) => {
  const collegeId = req.params.college_id;
  db.query('SELECT college_name FROM college WHERE college_id = ?', [collegeId], (err, results) => {
    if (err) {
      console.error('Error querying the database: ' + err.stack);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'College not found' });
    }
    res.json(results[0]);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
