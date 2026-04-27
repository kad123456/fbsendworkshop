const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Student = require('./models/student.js');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://kadhirrr1_db_user:kxd%40123@cluster0.0jhyifc.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// POST - Add student
app.post("/students", async (req, res) => {
    try {
        const newStudent = new Student({
            name: req.body.name,
            city: req.body.city
        });

        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET - Fetch students
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Test route
app.get('/', (req, res) => {
    res.send('Hello world, backend is working');
});

// Server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});