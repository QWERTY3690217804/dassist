const express = require('express');
const mysql = require('mysql2');
let cors = require('cors');
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

app.get('/getClassList', (req, res) => {
  const { majorName, collegeName } = req.query;

  if (!majorName || !collegeName) {
    res.status(400).json({ error: 'Missing majorName or collegeName parameters' });
  } else {
    // SQL query to retrieve class_list based on major_name and college_name
    const sql = 'SELECT c.class_list FROM college c JOIN major m ON c.major_id = m.major_id WHERE m.major_name = ? AND c.college_name = ?';
    db.query(sql, [majorName, collegeName], (err, results) => {
      if (err) {
        console.error('Error querying the database: ' + err);
        res.status(500).json({ error: 'Error querying the database' });
      } else if (results.length === 0) {
        res.status(404).json({ error: 'Class list not found for the given major and college names' });
      } else {
        res.json(results[0]);
      }
    });
  }
});

// Start the Express server
app.listen(6250, () => {
  console.log('Server is running on port 6250');
});
