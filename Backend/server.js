import express from "express"
import dotenv from "dotenv"
import path from "path"
import { connectdb } from "./Database/database.js";
import bookRoutes from "./Routes/book.route.js"

const port =  process.env.PORT || 3000;

const app = express();
dotenv.config();

app.use(express.json());

const __dirname = path.resolve();

app.use("/api/books", bookRoutes)

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/Frontend/dist")))

    app.get("*", (req, res) =>{
        res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"))
    })
}

app.listen(port, () =>{
    connectdb()
    console.log(`The Server is running at http://localhost:${port}`);
})

