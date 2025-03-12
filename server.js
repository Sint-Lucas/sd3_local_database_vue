import express from "express";
import mysql from 'mysql2';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for Vue frontend

// Connect to MariaDB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change if needed
    password: 'root', // Change if needed
    database: 'blog',
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MariaDB');
    }
});

// SELECT ALL USERS
app.get('/users', (req, res) => {
    db.query('SELECT * FROM user',
        (err, results) =>
        {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        });
});

// SELECT ALL CATEGORIES
app.get('/categories', (req, res) => {
    db.query('SELECT * FROM category',
        (err, results) =>
        {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
