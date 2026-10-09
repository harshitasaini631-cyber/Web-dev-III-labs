
const express = require("express");
const router = express.Router();

// Empty student data
let students = [];

// GET --> Read all students
router.get("/read", (req, res) => {
  try {
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send({ msg: "Error fetching students" });
  }
});

// GET --> Read a particular student
router.get("/:id", (req, res) => {
  try {
    const student = students.find((el) => el.id == req.params.id);

    if (!student) {
      return res.status(404).send({ msg: "Student not found" });
    }

    res.status(200).send(student);
  } catch (error) {
    res.status(500).send({ msg: "Error fetching student" });
  }
});

// POST --> Create a new student
router.post("/create", (req, res) => {
  try {
    const payload = req.body;

    if (!payload.id || !payload.name || !payload.course) {
      return res.status(400).send({
        msg: "ID, name and course are required"
      });
    }

    const exists = students.find((el) => el.id == payload.id);

    if (exists) {
      return res.status(400).send({ msg: "Student ID already exists" });
    }

    students.push(payload);

    res.status(201).send({ msg: "Student added successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Error adding student" });
  }
});

// PUT --> Update complete student data
router.put("/:id", (req, res) => {
  try {
    const payload = req.body;
    const id = req.params.id;

    const exists = students.find((el) => el.id == id);

    if (!exists) {
      return res.status(404).send({ msg: "Student not found" });
    }

    if (!payload.id || !payload.name || !payload.course) {
      return res.status(400).send({
        msg: "ID, name and course are required"
      });
    }

    const updateData = students.map((el) => {
      if (el.id == id) {
        return payload;
      } else {
        return el;
      }
    });

    students = updateData;

    res.status(200).send({ msg: "Student data updated successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Error updating student" });
  }
});

// DELETE --> Delete a student
router.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;
    const exists = students.find((el) => el.id == id);

    if (!exists) {
      return res.status(404).send({ msg: "Student not found" });
    }

    const deleteData = students.filter((el) => el.id != id);

    students = deleteData;

    res.status(200).send({ msg: "Student deleted successfully" });
  } catch (error) {
    res.status(500).send({ msg: "Error deleting student" });
  }
});

module.exports = router;
