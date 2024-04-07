import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
import express from 'express';
import connectToDB from "./db.js"
import authRouter from "./routes/authRoutes.js"
import askRouter from "./routes/askRoute.js";
const app = express();
import cors from "cors";
const port = 8181;

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use("/api/auth", authRouter);
app.use("/api/ask", askRouter);

app.listen(port, async() => {
    await connectToDB(process.env.MONGO_URI)
    console.log(`server alive at http://localhost:${port}`);
})