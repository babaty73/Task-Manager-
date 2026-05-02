# Task Manager

A modern, responsive task management application built with React, TypeScript, and Tailwind CSS. Features drag-and-drop functionality, dark mode support, and a clean, intuitive interface.

## ✨ Features

- **Task Management**: Add, organize, and remove tasks
- **Drag & Drop**: Move tasks between "Todo" and "Done" columns
- **Dark Mode**: Toggle between light and dark themes with persistence
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **TypeScript**: Full type safety for better development experience
- **Modern UI**: Clean, accessible interface with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Ready for any static hosting

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📖 Usage

1. **Adding Tasks**: Use the form at the top to add new tasks
2. **Moving Tasks**: Drag tasks from "Todo" to "Done" column
3. **Removing Tasks**: Hover over a task and click the X button
4. **Dark Mode**: Click the sun/moon toggle in the top-right corner

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Board.tsx          # Main board component with task management
│   ├── TaskCard.tsx       # Individual task component
│   ├── TaskColumn.tsx     # Column component for Todo/Done
│   └── TaskForm.tsx       # Form for adding new tasks
├── App.tsx                # Root component
├── main.tsx               # Application entry point
├── index.css              # Global styles and Tailwind imports
└── types.ts               # TypeScript type definitions
```

## 🎨 Features in Detail

### Dark Mode
- Persistent theme preference stored in localStorage
- Smooth transitions between themes
- Automatic system preference detection

### Drag & Drop
- HTML5 drag and drop API
- Visual feedback during dragging
- Seamless task movement between columns

### Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly interactions

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

This project uses:
- **ESLint** for code linting
- **TypeScript** for type checking
- **Tailwind CSS** for consistent styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Task editing functionality
- [ ] Due dates and reminders
- [ ] Task categories/tags
- [ ] Search and filtering
- [ ] Data persistence with backend API
- [ ] User authentication
- [ ] Task sharing and collaboration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

Made with ❤️ using React and TypeScript
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
