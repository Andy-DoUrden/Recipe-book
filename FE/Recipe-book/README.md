# Recipe Book

A modern web application for browsing and discovering recipes. Built with React, TypeScript, and styled-components.

## Features

- Browse recipes with filtering by ingredient, country, or category
- View detailed recipe information
- Responsive design for all devices
- Type-safe code with TypeScript

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd recipe-book
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:
   Create a `.env` file in the root directory with the following content:

```
VITE_API_BASE_URL=http://localhost:3000/api
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
  ├── api/          # API integration
  ├── components/   # Reusable components
  ├── pages/        # Page components
  └── styles/       # Global styles
```

## Code Quality

This project uses:

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Styled-components for styling

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
