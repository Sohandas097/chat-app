import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express()
const PORT = process.env.PORT || 9000

dotenv.config();

app.use(express.json()) //to parse the incoming requests with JSON payloads (from req.body)

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

app.get("/",(req,res) => {
    // root route http://localhost:7000/
    res.send("Hello World")
})


app.listen(PORT, () => {
    console.log(PORT);
    connectToMongoDB() //connecting to database
    console.log(`Server is running on port ${PORT}`);
})