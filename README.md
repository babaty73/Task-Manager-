# 📋 Task Manager

A modern, full-stack task management application built with React, TypeScript, and Tailwind CSS. Features intuitive drag-and-drop functionality, comprehensive dark mode support, and a responsive design that works seamlessly across all devices.
## 🛠️ Technology Stack
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

## 📖 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technology Stack](#️-technology-stack)
- [🚀 Quick Start](#-quick-start)
- [📋 Usage](#-usage)
- [🏗️ Project Structure](#️-project-structure)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)

## ✨ Features

### 🎯 Core Functionality
- **Task Creation**: Intuitive form-based task addition with validation
- **Task Organization**: Drag-and-drop interface for seamless task management
- **Task Completion**: Move tasks between "Todo" and "Done" states
- **Task Removal**: Clean deletion with confirmation patterns

### 🎨 User Experience
- **Dark Mode**: Comprehensive theme switching with system preference detection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Polished transitions and micro-interactions
- **Accessibility**: WCAG-compliant interface with keyboard navigation

### 🔧 Technical Features
- **Type Safety**: Full TypeScript implementation with strict typing
- **Performance**: Optimized React components with efficient re-rendering
- **State Management**: Local state with localStorage persistence
- **Modern Build**: Vite-powered fast development and optimized production builds

## 🛠️ Technology Stack

### Frontend Framework
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Next-generation frontend tooling

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic CSS vendor prefixing

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the application**
   Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
# or
yarn build
```

The production build will be available in the `dist/` directory.

## � Usage

### Basic Operations

1. **Adding Tasks**
   - Locate the task creation form at the top of the application
   - Enter a descriptive task title
   - Click "Add Task" or press Enter

2. **Managing Tasks**
   - **Move Tasks**: Drag tasks from the "Todo" column to the "Done" column
   - **Remove Tasks**: Hover over a task and click the delete (×) button

3. **Theme Switching**
   - Click the sun/moon toggle in the top-right corner
   - Theme preference is automatically saved


## 🏗️ Project Structure

```
task-manager/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Board.tsx     # Main application board
│   │   ├── TaskCard.tsx  # Individual task component
│   │   ├── TaskColumn.tsx # Column container component
│   │   └── TaskForm.tsx  # Task creation form
│   ├── assets/           # Component assets
│   ├── App.tsx           # Root application component
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Global styles and Tailwind imports
│   └── types.ts          # TypeScript type definitions
├── dist/                 # Production build output
├── node_modules/         # Dependencies
├── package.json          # Project configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── README.md             # Project documentation
```

### Inspiration
- Modern task management applications
- Open-source React ecosystem
- Accessibility-first design principles

---

<div align="center">

**Built with ❤️ using React & TypeScript**

[⬆️ Back to Top](#-task-manager)

</div>
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
