# Laravel-React

A full-stack web application starter template combining **Laravel** (backend) and **React** (frontend), designed for modern development workflows.

## 🚀 Features

- Laravel 10+ backend with RESTful API support
- React frontend powered by Vite
- TypeScript integration for scalable frontend development
- Pre-configured ESLint and Prettier for code consistency
- Environment configuration via `.env.example`
- Organized folder structure for easy navigation

## 📦 Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Backend    | Laravel (PHP)      |
| Frontend   | React + TypeScript |
| Build Tool | Vite               |
| Styling    | CSS                |

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/JiggaRin/Laravel-React.git
   cd Laravel-React
   ```

2. **Install backend dependencies**
   ```bash
   composer install
   cp .env.example .env
   php artisan key:generate
   ```

3. **Install frontend dependencies**
   ```bash
   npm install
   ```

4. **Run the development servers**
   ```bash
   php artisan serve
   npm run dev
   ```

## 📁 Project Structure

- `app/` – Laravel application logic
- `resources/` – React frontend components
- `routes/` – API and web routes
- `config/` – Laravel configuration files

## 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---

Enjoy building with Laravel & React! ✨
