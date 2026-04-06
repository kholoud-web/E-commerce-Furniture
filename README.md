# 🛍️ E-Commerce Furniture Website (React)

A modern and responsive e-commerce web application built using React, featuring a complete shopping experience including authentication, cart management, product comparison, and checkout system.

---

## 🚀 Features

### 🔐 Authentication System

* User registration & login (React Hook Form + Zod validation)
* Persistent login using localStorage
* Protected routes (e.g., Checkout, Account)

### 🛒 Cart System

* Add / remove products
* Increase / decrease quantity
* Dynamic total price calculation
* Cart is saved per user (multi-user support)
* Cart persists after refresh

### 📦 Orders System

* Place orders from checkout
* Order history saved per user
* Automatic cart clearing after order

### 🔍 Search & UI Features

* Search modal with filtering
* Responsive design (mobile-first)
* Smooth UI interactions

### ⚖️ Product Comparison

* Compare up to 2 products
* Dynamic comparison table
* Product specs rendered from JSON

---

## 🧠 Tech Stack

* React (Vite)
* React Router
* Context API (State Management)
* React Hook Form
* Zod (Validation)
* Tailwind CSS
* LocalStorage (Fake database)

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── NavBar
│   ├── CartDrawer
│   ├── ProtectedRoute
│
├── pages/
│   ├── Home
│   ├── Shop
│   ├── ProductDetails
│   ├── Cart
│   ├── Checkout
│   ├── Comparison
│   ├── Login
│   ├── Register
│   ├── Account
│
├── Context/
│   ├── UserContext
│   ├── CartContext
│   ├── CompareContext
│
├── layouts/
│   ├── MainLayout
│   ├── AuthLayout
│
└── data/
    ├── Products.js
```

---

## ⚙️ Installation

```bash
git clone https://github.com/kholoud-web/E-commerce-Furniture.git
cd your-repo-name
npm install
npm run dev
```

---

## 🧪 Demo Credentials (Example)

You can register a new account or use:

```
Email: test@test.com
Password: 123456
```

---

## 📌 Key Concepts Implemented

* Multi-user system using localStorage
* Separation of concerns (Context, Layouts, Pages)
* Reusable components
* Form validation with Zod
* State synchronization between contexts

---

## 💡 Future Improvements

* Connect to real backend (Node.js / Firebase)
* Payment integration (Stripe / Paymob)
* Product reviews system

---

## 👩‍💻 Author

**Kholoud Mahmoud**
Frontend Developer
📍 Alexandria, Egypt

---

## 🌟 If you like this project

Give it a ⭐ on GitHub!
