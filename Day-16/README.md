|Dis|Output|
|----------|-----------|
|App|![7 VS](https://github.com/user-attachments/assets/f600f58d-e505-43e0-9731-9d1bc066de6e)|
|Database connected|![8 DATABASE CONNECT](https://github.com/user-attachments/assets/1c4c5dc7-ef47-4531-a7d4-8eb337cec3ab)|
|Connect database|![1](https://github.com/user-attachments/assets/5f380424-9606-451d-8e54-0b63abd14618)|
|Department data|![3 depat data](https://github.com/user-attachments/assets/8685c499-ad01-4dbc-9eb8-1925fd3d3377)|
|Employee data|![4 emplo 1](https://github.com/user-attachments/assets/ffd7f506-41aa-46c4-bc74-185e6a628828)|
|ETF data|![5 etf](https://github.com/user-attachments/assets/db390977-1de4-4622-baf7-19cd7996322b)|
|Project data|![6 project](https://github.com/user-attachments/assets/88c5e6d5-e69d-49b6-af7f-91152e5ad13b)|
|GET employee|![9 GET employee](https://github.com/user-attachments/assets/2cf9b76e-0b50-419e-abe7-df16b5763ec4)|
|GET Project|![10 get project](https://github.com/user-attachments/assets/c1e17035-324f-4f61-a059-b5d327fdd7db)|
|GET ETF|![11 get etf](https://github.com/user-attachments/assets/db61aa5e-d49a-4516-a6ee-16e2adcb0e96)|
|GET department|![12 get department](https://github.com/user-attachments/assets/2bd10b0a-c6e9-475d-a0c5-89ba3a2060bf)|
|give dept id n employees|![13- give dept id n employees ](https://github.com/user-attachments/assets/bc8e66e3-0205-4c2b-afe8-6b8590787336)|
||![13 - 2](https://github.com/user-attachments/assets/be6952c7-8768-4bd3-8a7c-af7cf3e512d7)|
||![13 - 3](https://github.com/user-attachments/assets/5b45c2e3-43df-439a-884d-b0ed336d45f7)|
|display only employee id , name, department name|![14- display only employee id , name, department name](https://github.com/user-attachments/assets/0161fe65-2219-4ef0-a6c6-8853e52b4e50)|

Date: 30-05-2025             Day: 17

Task: Department, ETF, Employee, and Project API Endpoints
1. Get Full Department, ETF, Employee, and Project Details
🔹 Method: GET

🔹 URL: /departments/details

🔹 Description:
Retrieves all departments with their linked employees, ETFs, and projects using MongoDB aggregation and lookup.

2. Get Department by ID (Basic Info)
🔸 Method: GET

🔸 URL: /departments/:id/basic

🔸 Example: /departments/D101/basic

🔸 Description:
Fetches only the department's ID and name for the given department ID.

3. Get Departments with Employee Count
🔹 Method: GET

🔹 URL: /departments/with-employee-count

🔹 Description:
Lists all departments along with the number of employees working in each department.

Notes:
✅ MongoDB $lookup is used to join collections.

✅ Aggregation stages include $addFields and $project for data shaping.

✅ The API server runs at http://localhost:3010.

✅ Proper error responses for missing data and server errors are implemented

|Dis|Output|
|----------|-----------|
|Get all distinct positions|![Uploading Get all distinct positions.png…]()|
|Get employee count per position|![Uploading Get employee count per position.png…]()|
|Get employee with project names|![Uploading Get employee with project names.png…]()|
|Get full department, ETF, employee, and project details|![Uploading Get full department, ETF, employee, and project details.png…]()|
