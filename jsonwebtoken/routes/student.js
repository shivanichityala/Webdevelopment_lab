const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

// Sample data
let students = [
    { id: 1, name: "Shivani", course: "CSE" }
];

// 🔒 PROTECTED ROUTE
router.get("/students", verifyToken, (req, res) => {
    res.json(students);
});

// 🔒 ADD STUDENT
router.post("/students", verifyToken, (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.json({ message: "Student added", students });
});

module.exports = router;
