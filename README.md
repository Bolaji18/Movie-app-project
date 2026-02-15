# Jason React Project

A full-stack web application built with React (TypeScript) frontend and Flask backend.

## Project Structure

```
jason_react/
├── backend/               # Flask API server
│   └── app.py            # Main Flask application
└── jason_website/        # React frontend
    ├── src/              # Source files
    ├── public/           # Public assets
    └── package.json      # Frontend dependencies
```

## Technologies Used

### Frontend
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **React Router DOM** - Client-side routing
- **ESLint** - Code linting

### Backend
- **Flask** - Python web framework
- **Flask-CORS** - Cross-Origin Resource Sharing support

## Prerequisites

- **Node.js** (v16 or higher)
- **Python** (v3.7 or higher)
- **pip** (Python package manager)
- **npm** or **yarn**

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install flask flask-cors
   ```

3. Run the Flask server:
   ```bash
   python app.py
   ```

   The backend server will start at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd jason_website
   ```

2. Install Node dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173` (or the port shown in terminal)

## Available Scripts

### Frontend (jason_website/)

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

### Backend (backend/)

- `python app.py` - Start Flask development server

## API Endpoints

### GET /api/data
Returns a simple JSON message.

**Response:**
```json
{
  "message": "Hello, World!"
}
```

## Development

1. Start the backend server first (runs on port 5000)
2. Start the frontend development server (runs on port 5173)
3. The frontend can make API calls to `http://localhost:5000/api/...`

## Features

The application includes various React components and learning examples:
- Event handling
- Forms and state management
- Props and destructuring
- React Router navigation
- API integration
- DaisyUI components
- Movie listings and favorites
- Custom hooks and logic

## Contributing

This is a learning project. Feel free to explore and modify the code to learn more about React and Flask integration.

## License

This project is for educational purposes.
