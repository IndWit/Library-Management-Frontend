# 📘 **README.md**

You can copy-paste this as your README file.

---

# 📚 Library Management System (Frontend)

A modern, responsive Library Management System built using **React + TypeScript**.
This application allows users to manage books efficiently and includes optional user authentication.
Designed with clean UI components and smooth workflows for CRUD operations.

---

## ✨ **Features**

### 🔐 **User Authentication**

* User Registration & Login (JWT-based)
* Protected routes for Dashboard & Book Management
* Token stored securely in browser storage

### 📚 **Book Management**

* Add New Books
* Edit Existing Books
* Delete Books
* View All Books
* Modal-based form UI
* Input validation & error handling

### 🖥️ **User Interface**

* Responsive layout (works on mobile & desktop)
* Clean navigation bar
* Reusable components
* Modern UI with smooth animations

---

## 🛠 **Tech Stack**

| Layer              | Technology          |
| ------------------ | ------------------- |
| Frontend           | React + TypeScript  |
| Styling            | Tailwind CSS        |
| API Calls          | Axios               |
| Routing            | React Router        |
| Icons              | Lucide React        |
| Forms & Validation | React Hooks         |
| State              | React State + Hooks |

---

## 📦 **Project Structure**

```
src/
├── assets/                 # Images and static files
├── components/             # Reusable UI components
│   ├── BookModal.tsx       # Modal for adding/editing a book
│   └── Navbar.tsx          # Top navigation bar
│
├── pages/                  # Main application pages
│   ├── BooksPage.tsx       # Book listing + CRUD controls
│   ├── DashboardPage.tsx   # Main dashboard (after login)
│   ├── HomePage.tsx        # Public homepage
│   ├── LoginPage.tsx       # Login screen
│   └── RegisterPage.tsx    # Registration screen
│
├── services/
│   └── api.ts              # Axios instance + API methods
│
└── types/
    └── index.ts            # Global TypeScript types for Book/User
```

---

## 🚀 **Getting Started**

### **Prerequisites**

* Node.js (v16 or newer)
* npm or yarn
* Backend API running (C# .NET API)

---

### **1. Clone the Repository**

```sh
git clone <your-repo-link>
cd frontend
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Start Development Server**

```sh
npm run dev
```

> The app will open at:
> [http://localhost:5173](http://localhost:5173)

---

## 🔧 **Configuration**

Your Axios API is configured inside:

```
src/services/api.ts
```

Update the base URL if your backend API is different:

```ts
const api = axios.create({
  baseURL: "https://localhost:7036/api",
});
```

---

## 🎯 **Main Features Overview**

### ✔ **Dashboard**

* Simple and clean UI
* Navigation access to Books Page
* Shows logged-in user

### ✔ **Books Page**

* List all books
* Add new books (modal popup)
* Edit book details
* Delete books with confirmation
* Real-time UI updates

### ✔ **Authentication Pages**

#### Register Page

* Create new user
* Form validation
* Sends data to `/api/auth/register`

#### Login Page

* Login with username/password
* JWT stored in localStorage
* Redirects to Dashboard

---

## 🧪 **Error Handling**

* API errors displayed to user
* Validation messages
* Try/catch wrapping around async functions
* Proper response UI for invalid login, network errors, etc.

---

## 📄 **License**

This project is licensed under the **MIT License**.

---

## 👏 **Acknowledgments**

Special thanks to:

* React Team
* TailwindCSS
* Lucide Icons
* Vite for a fast development environment

---

