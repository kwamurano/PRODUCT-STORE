import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectTO_DB } from "./config/db.js";
import productsRoute from "./routes/product.route.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
app.use(cors());
app.use(express.json());
app.use("/api/products", productsRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "FRONTEND/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "FRONTEND", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectTO_DB();
  console.log(`server running at: http://localhost:${PORT}`);
});
