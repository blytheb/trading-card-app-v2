import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.send("Backend running !");
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`)
    });
}).catch((error) => {
    console.error("Failed to connect to the database", error);
});


