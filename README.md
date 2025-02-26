# Project Name

<<<<<<< HEAD
## 🚧 Under Development 🚧
=======
Under Development
>>>>>>> 5eacda0 (Save changes before pulling)

This website is currently in the **development stage** and is not ready for deployment or use. Cloning this repository **will not provide a functional application** as ongoing work is being done to integrate key features.

## 📌 About the Project

This project is a web application built using:

- **Laravel** (Backend API)
- **Inertia.js** (Bridges Laravel and React)
- **React** (Frontend UI)

The application aims to provide a dynamic page creation system, including a mechanism for managing a navigational menu.

## 🛠️ Setup & Installation (For Development Only)

If you are part of the development team and need to set up the project locally, follow these steps:

### **1. Clone the Repository**
```sh
git clone <repository-url>
cd <project-folder>
```

### **2. Install Backend Dependencies**
```sh
composer install
```

### **3. Install Frontend Dependencies**
```sh
npm install
```

### **4. Set Up Environment Variables**
Copy the `.env.example` file and rename it to `.env`. Then, configure your database and other settings.
```sh
cp .env.example .env
php artisan key:generate
```

### **5. Run Migrations**
```sh
php artisan migrate
```

### **6. Start Development Servers**
For Laravel backend:
```sh
php artisan serve
```
For React frontend (via Vite):
```sh
npm run dev
```

## ⚠️ Important Notes
- This project is **not production-ready**.
- New features and improvements are actively being developed.
- Contributions are welcome from the development team only at this stage.

## 📬 Contact
For inquiries related to development, please reach out to the project maintainers.

