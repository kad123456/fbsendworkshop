# 🎓 Student Management Backend (Node.js + Express + MongoDB)

A simple and scalable backend API to manage student data using **Node.js**, **Express**, and **MongoDB Atlas**.
This project demonstrates CRUD operations, REST API design, and database integration.

---

## 🚀 Features

* ✅ Add new students
* 📄 Fetch all students
* 🌐 RESTful API structure
* 🔗 MongoDB Atlas integration
* ⚡ Fast and lightweight backend
* 🛡️ Error handling implemented

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (Cloud Database)
* **Middleware:** CORS, Express JSON Parser
* **ODM:** Mongoose

---

## 📁 Project Structure

```
project-folder/
│
├── models/
│   └── student.js       # Mongoose schema
│
├── server.js            # Main backend server
├── package.json         # Dependencies
└── README.md            # Project documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/student-backend.git
cd student-backend
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Setup MongoDB Atlas

Create a cluster using MongoDB Atlas and follow these steps:

* Create a database user
* Whitelist your IP (`0.0.0.0/0` for testing)
* Get your connection string

---

### 4️⃣ Configure Environment Variables (Recommended)

Create a `.env` file:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
PORT=3001
```

⚠️ If your password contains special characters like `@`, encode it:

* `@` → `%40`

---

### 5️⃣ Run the Server

```bash
node server.js
```

Or with nodemon:

```bash
npx nodemon server.js
```

---

## 🌐 API Endpoints

### 🔹 Base URL

```
http://localhost:3001
```

---

### ➕ Create Student

```
POST /students
```

#### Request Body:

```json
{
  "name": "John Doe",
  "city": "Bangalore"
}
```

#### Response:

```json
{
  "_id": "12345",
  "name": "John Doe",
  "city": "Bangalore"
}
```

---

### 📄 Get All Students

```
GET /students
```

#### Response:

```json
[
  {
    "_id": "12345",
    "name": "John Doe",
    "city": "Bangalore"
  }
]
```

---

### 🏠 Test Route

```
GET /
```

#### Response:

```
Hello world, backend is working
```

---

## 🧩 Mongoose Model Example

`models/student.js`

```js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Student', studentSchema);
```

---

## ⚠️ Common Errors & Fixes

### ❌ MongoDB Connection Error

```
querySrv ENOTFOUND
```

✔ Fix:

* Check your connection string
* Encode special characters (`@ → %40`)

---

### ❌ CORS Issues

✔ Fix:

```js
app.use(cors());
```

---

### ❌ Empty Response in GET

✔ Fix:

```js
res.json(students);
```

---

## 📌 Future Improvements

* ✏️ Update student API (PUT)
* ❌ Delete student API (DELETE)
* 🔐 Authentication (JWT)
* 🎨 Frontend (React / Flutter)
* 📊 Pagination & filtering

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make changes
4. Submit a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed by **Kadhir**

---

## ⭐ Support

If you like this project:

* Give it a ⭐ on GitHub
* Share it with others

---
