MongoDB + Express API – Company Data Management System
studentapp:

------------------------------------------------------
1. ✅ Get All Students with Degree Details

GET /students/

- Returns all students including their degree details using:
.populate("degreeId")

------------------------------------------------------
2. ✅ Get All Students with Degree and Enrolled Course Details

GET /students/withcourses

- Returns students with both degree and enrolled course info.

Route to add in studentRoute.js:
------------------------------------------------------
router.get('/withcourses', async (req, res) => {
    try {
        const results = await Student.find()
            .populate("degreeId")
            .populate("enroled_courses");
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error!");
    }
});
------------------------------------------------------

------------------------------------------------------
3. ✅ Get a Specific Student with Populated Fields

GET /students/:id

- Returns one student with degree and enrolled course info.

Route to add in studentRoute.js:
------------------------------------------------------
router.get('/:id', async (req, res) => {
    try {
        const results = await Student.findById(req.params.id)
            .populate("degreeId")
            .populate("enroled_courses");
        if (!results) {
            return res.status(404).send("Student not found!");
        }
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error!");
    }
});
------------------------------------------------------

Test Example:
GET /students/2021ict01

------------------------------------------------------
4. ✅ Post New Student with Courses and Degree

POST /students/
Content-Type: application/json

Example Body:
------------------------------------------------------
{
    "_id": "2021ict02",
    "name": "Lucky",
    "age": 22,
    "degreeId": "FAS2021IT",
    "enroled_courses": [
        "682ebd239c53dd68004a165f",
        "682ebd4defa6c2c278a91baa"
    ]
}
------------------------------------------------------

------------------------------------------------------
5. ✅ Advanced Query: Get All Students Enrolled in a Specific Course

GET /students/course/:courseId

- Returns students enrolled in a specific course ID.

Route to add in studentRoute.js:
------------------------------------------------------
router.get('/course/:courseId', async (req, res) => {
    try {
        const results = await Student.find({ enroled_courses: req.params.courseId })
            .populate("degreeId")
            .populate("enroled_courses");
        res.status(200).json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error!");
    }
});
------------------------------------------------------

Example:
GET /students/course/682ebd239c53dd68004a165f

------------------------------------------------------
📌 Summary of Populate Routes to Test in Postman:

| Route                            | Description                               |
|----------------------------------|-------------------------------------------|
| GET /students/                   | Students with degree only                 |
| GET /students/withcourses        | Students with degree and enrolled courses |
| GET /students/:id                | One student with degree + courses         |
| POST /students/                  | Add new student with courses and degree   |
| GET /students/course/:courseId  | All students in specific course           |

------------------------------------------------------

|Dis|Output|
|-------|----------|
|get by id|![get by id](https://github.com/user-attachments/assets/b492e98e-5751-40a4-80a4-33dae7d166d5)|
|put|![put](https://github.com/user-attachments/assets/b833f4a8-325a-4eef-9a92-fca7c193e608)|
|Delete|![delete](https://github.com/user-attachments/assets/59e257a2-ea47-49c2-a195-858986dfb86f)|
|Get all students with populated degrees|![GET all students with populated degrees](https://github.com/user-attachments/assets/f500a2d1-d130-42f3-801b-0c3df53dc56d)|

