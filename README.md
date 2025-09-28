[README.md](https://github.com/user-attachments/files/22569844/README.md)
# Introducing-FiveM-Website

This project is a custom roleplay community website built with **HTML, CSS, JavaScript, and Firebase**.  
It includes **user authentication (sign up / log in)**, **Firestore integration**, and multiple pages for server features such as places, vehicles, roles, and more.

---

## 🚀 Features
- User registration with custom fields (name, surname, birthday, phone, role type, etc.)
- Login system using Firebase Authentication
- Firestore database integration for user data storage
- Responsive UI with custom design
- Multiple content pages (Server, Places, Vehicles, Roles, About Us, etc.)
- Secure Firebase rules (users can only read/write their own profile)

---

## 🛠️ Tech Stack
- **Frontend**: HTML, CSS, JavaScript  
- **Backend/Database**: Firebase Authentication & Firestore  
- **Hosting**: Local development with VS Code **Live Server**, optional Firebase Hosting

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Introducing-FiveM-Website.git
   cd Introducing-FiveM-Website/pages
   ```

2. **Open with VS Code** and install the **Live Server** extension (by Ritwick Dey).

3. **Run the website locally**
   - Right-click on `signup.html` or `homepage.html`
   - Select **"Open with Live Server"**

   The site will now be available at:
   ```
   http://127.0.0.1:5500/pages/signup.html
   ```

---

## 🔑 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)  
2. Create a new Firebase project  
3. Enable **Authentication → Sign-in method → Email/Password**  
4. Add authorized domains:
   - `localhost`
   - your Firebase hosting domain (e.g., `yourproject.web.app`)
   - (optional) `127.0.0.1`
5. Go to **Project Settings → SDK Setup and Config**  
   Copy your `firebaseConfig` object and paste it into `firebase.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSyCHKEClTY9joDTNPH_wQjhDQJ5IZWQEtIg",
     authDomain: "introducing-fivem.firebaseapp.com",
     projectId: "introducing-fivem",
     storageBucket: "introducing-fivem.firebasestorage.app",
     messagingSenderId: "923623657468",
     appId: "1:923623657468:web:62207692aee728cc25ec79",
     measurementId: "G-N76B0WKL6V"
   };
   ```

---

## 🗄️ Firestore Setup

1. Go to **Firestore Database** in Firebase Console  
2. Create a collection called `users`  
3. Set the security rules:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{uid} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }
     }
   }
   ```

---

## ⚡ Quick Start

1. Clone the repo  
2. Install Live Server in VS Code  
3. Set up Firebase project & paste your `firebaseConfig` into `firebase.js`  
4. Open `signup.html` with Live Server  
5. Sign up with a test user → Data will be saved in Firestore  
6. Log in with the same user → Redirected to `user.html` with user info displayed  

---

## 📂 Project Structure
```
Introducing-FiveM-Website/
│
├── Fotos/                # Images used across the site
├── pages/
│   ├── assets/
│   │   ├── auth-ui.js
│   │   ├── firebase.js
│   │   ├── login.js
│   │   └── signup.js
│   ├── homepage.html
│   ├── signup.html
│   ├── login.html
│   ├── user.html
│   └── ... (other pages)
└── fivemlogo.png
```

---

## 🧑‍💻 Author
Developed by **Erol Özer Bozdemir**  
This project was created as a **FiveM community website** with Firebase integration.  
