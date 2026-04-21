const express = require('express');
const app = express();

app.use(express.json());

let students = [];

app.post('/students', (req, res) => {
    students.push(req.body);
    res.send("Added");
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.put('/students/:id', (req, res) => {
    students[req.params.id] = req.body;
    res.send("Updated");
});

app.delete('/students/:id', (req, res) => {
    students.splice(req.params.id, 1);
    res.send("Deleted");
});

app.listen(3000);
