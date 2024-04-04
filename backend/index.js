require("dotenv").config();
const express = require("express");
const connectToDB = require("./db");
const authRouter = require("./routes/authRoutes");
const app = express();
const cors = require("cors");
const port = 8181;

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use("/api/auth", authRouter);

app.listen(port, async() => {
    await connectToDB(process.env.MONGO_URI)
    console.log(`server alive at http://localhost:${port}`);
})