# Recipe Book API

A RESTful API service that provides access to recipe data using TheMealDB API. This service allows users to search for recipes, filter them by various criteria, and get detailed information about specific recipes.

## Features

- Get all available recipes
- Filter recipes by:
  - Ingredient
  - Country
  - Category
- Get detailed information about a specific recipe

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd recipe-book/BE
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following content:

```env
API_BASE=https://www.themealdb.com/api/json/v1/1
PORT=3000
```

## Running the Application

To start the development server with hot-reload:

```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in your .env file).

## API Endpoints

### Get Recipes

- **URL**: `/recipes`
- **Method**: `GET`
- **Query Parameters**:
  - `ingredient` (optional): Filter recipes by ingredient
  - `country` (optional): Filter recipes by country
  - `category` (optional): Filter recipes by category
- **Example Requests**:

  ```bash
  # Get all recipes
  GET http://localhost:3000/recipes

  # Filter by ingredient
  GET http://localhost:3000/recipes?ingredient=chicken

  # Filter by country
  GET http://localhost:3000/recipes?country=Italian

  # Filter by category
  GET http://localhost:3000/recipes?category=Seafood
  ```

### Get Recipe Details

- **URL**: `/recipes/:id`
- **Method**: `GET`
- **URL Parameters**:
  - `id`: The ID of the recipe
- **Example Request**:
  ```bash
  GET http://localhost:3000/recipes/52772
  ```

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- `200 OK`: Request successful
- `404 Not Found`: No recipes found or recipe not found
- `500 Internal Server Error`: Server error occurred

## Project Structure

```
src/
├── common/
│   └── constants/
│       └── urls.ts
├── routes/
│   └── recipes.ts
├── services/
│   └── recipeService.ts
└── index.ts
```

## Technologies Used

- Node.js
- Express.js
- TypeScript
- Axios
- dotenv
- CORS

## Development

The project uses TypeScript for type safety and better development experience. The development server uses `ts-node-dev` for hot-reloading during development.

## License

ISC
