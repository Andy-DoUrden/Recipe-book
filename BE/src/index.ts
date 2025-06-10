import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import recipeRoutes from "./routes/recipes";

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use("/recipes", recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
