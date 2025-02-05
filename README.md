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

git clone https://github.com/yourusername/restaurant-client.git
git clone https://github.com/yourusername/restaurant-server.git
2️⃣ Install Dependencies
Frontend:
bash
Copy
Edit
cd restaurant-client
npm install
Backend:
bash
Copy
Edit
cd restaurant-server
npm install
3️⃣ Configure Environment Variables
Create a .env file in both client and server directories with the required API keys.

Frontend (restaurant-client/.env)
plaintext
Copy
Edit
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_BACKEND_URL=http://localhost:5000
Backend (restaurant-server/.env)
plaintext
Copy
Edit
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret
4️⃣ Start the Development Servers
Frontend:
bash
Copy
Edit
npm run dev
Backend:
bash
Copy
Edit
npm run start
🖼️ Project Screenshots
Add screenshots here to showcase UI and features.

🔌 API Endpoints
User Authentication
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	User login & JWT generation
GET	/api/auth/user	Get logged-in user details
Food Management
Method	Endpoint	Description
GET	/api/foods	Get all food items
POST	/api/foods	Add a new food item (Private)
GET	/api/foods/:id	Get food item details
PUT	/api/foods/:id	Update food item (Private)
DELETE	/api/foods/:id	Delete food item (Private)
Orders
Method	Endpoint	Description
POST	/api/orders	Place a new order (Private)
GET	/api/orders/user	Get user's order history (Private)
DELETE	/api/orders/:id	Cancel an order (Private)
