# 🍽️ Taste-Track: a Restaurant Management Website 

### A full-stack restaurant management platform built using the **MERN stack**, offering an engaging experience for customers and streamlined operations for restaurant owners.

## 🌐 Live Demo

- **Live Site:** https://taste-track-5d237.web.app/
- **Server Repository:** https://github.com/mustafiz8g/Taste-Track-Server

---

## 📖 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation & Setup](#-installation--setup)
- [Project Screenshots](#-project-screenshots)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Contributors](#-contributors)
- [License](#-license)

---

## ✨ Features

- ✅ **User Authentication**: Secure login/register with Firebase authentication & JWT.
- 🍔 **Food Management**: Users can browse, add, update, and delete food items.
- 🛒 **Ordering System**: Customers can order food with real-time availability tracking.
- 🔍 **Search & Filtering**: Search food items by name, category, and availability.
- 📝 **Personalized User Dashboard**: Users can manage their foods & orders.
- 📸 **Gallery Page**: Displays a collection of food images with a lightbox effect.
- 🌗 **Dark Mode**: Toggle between light and dark themes.
- 🔥 **Real-Time Notifications**: SweetAlert/Toast notifications for every action.
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop.
- 🔐 **Secure API**: Protect private routes with JWT authentication.

---

## 🛠️ Technologies Used

### **Frontend (Client)**
- ⚛ **React.js (Vite)**
- 🚀 **React Router**
- 🎨 **Tailwind CSS**
- 🔥 **Firebase Authentication**
- ⚡ **TanStack Query (React Query)**
- 🔗 **Axios**
- 🎉 **SweetAlert2 / Toast Notifications**
- 🌗 **Framer Motion (Animations)**

### **Backend (Server)**
- 🌐 **Node.js**
- ⚡ **Express.js**
- 🛢 **MongoDB (Mongoose)**
- 🔑 **JSON Web Token (JWT)**
- ⏳ **Moment.js (Date Formatting)**

### **Other Tools**
- 🔐 **Dotenv for Environment Variables**
- 🔍 **MongoDB Operators ($and, $or for filtering)**

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/yourusername/real-estate-client.git
git clone https://github.com/yourusername/real-estate-server.git
```

### **2️⃣ Install Dependencies**
 "@firebasegen/default-connector": "file:dataconnect-generated/js/default-connector",
    "@headlessui/react": "^2.2.0",
    "@tailwindcss/vite": "^4.0.0",
    "@tanstack/react-query": "^5.64.2",
    "axios": "^1.7.9",
    "firebase": "^11.2.0",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-hot-toast": "^2.5.1",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.3",
    "react-spinners": "^0.15.0",
    "sort-by": "^0.0.2",
    "sweetalert2": "^11.15.10",
    "swiper": "^11.2.1"
#### Frontend:
```bash
cd real-estate-client
npm install
```
#### Backend:
```bash
cd real-estate-server
npm install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file in both **client** and **server** directories with the required API keys.

#### **Frontend (`real-estate-client/.env`)**
```plaintext
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_BACKEND_URL=http://localhost:5000
```

#### **Backend (`real-estate-server/.env`)**
```plaintext
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### **4️⃣ Start the Development Servers**
#### Frontend:
```bash
npm run dev
```
#### Backend:
```bash
npm run start
```

---

## 🖼️ Project Screenshots

_Add screenshots here to showcase UI and features._

---
