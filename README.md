 # 📝 Quora Lite – Express.js Post App

A Quora-style post-sharing web application built with **Node.js**, **Express.js**, and **EJS**.  
It allows users to create, view, edit, and delete posts dynamically using RESTful routes and a clean UI.

---
# LINK- https://query-nest-q5ut.vercel.app/posts

## 🚀 Features

- View all posts in a responsive grid layout
- Create new posts with username and content
- View individual post details
- Edit existing posts using PATCH
- Delete posts using method override
- Styled with a modern, professional UI

---

## 📸 Screenshots

<img src="public/screenshot_home.png" width="600" alt="Homepage" />
<img src="public/screenshot_edit.png" width="600" alt="Edit Page" />

---

## 📁 Project Structure

├── public/
│ └── style.css
├── views/
│ ├── index.ejs
│ ├── new.ejs
│ ├── edit.ejs
│ └── show.ejs
├── index.js
├── package.json
└── README.md

yaml
Copy code

---

## 📦 Tech Stack

- **Backend:** Node.js, Express.js
- **Templating Engine:** EJS
- **Styling:** HTML, CSS (custom)
- **Utilities:** UUID, Method-Override

---

## 📮 REST API Endpoints

| Method | Route               | Description                |
|--------|--------------------|----------------------------|
| GET    | `/posts`           | Show all posts             |
| GET    | `/posts/new`       | Form to create new post    |
| POST   | `/posts`           | Create a new post          |
| GET    | `/posts/:id`       | View a specific post       |
| GET    | `/posts/:id/edit`  | Form to edit a post        |
| PATCH  | `/posts/:id`       | Update an existing post    |
| DELETE | `/posts/:id`       | Delete a post              |

---

## 🛠 Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/your-username/quora-lite.git
cd quora-lite
Install dependencies

bash
Copy code
npm install
Run the app

bash
Copy code
nodemon index.js
Visit
http://localhost:8080/posts

📌 License
This project is for educational and personal learning purposes only.
It is not licensed for commercial or production use.

💡 Future Improvements
Add login/authentication

Connect to MongoDB for persistent storage

Like/comment functionality

Pagination and search

🙌 Acknowledgments
Express.js Documentation

EJS Templating

Inspired by the design of Quora

Made with ❤️ by Vansh Rana
