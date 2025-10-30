import express from 'express'
import cors from 'cors'
import fileRoute from './Router/fileRoute.js'
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("<h3>Server is Running</h3>")
});
app.use("/api/file", fileRoute);

app.listen(3000, () => console.log("Server is Running"));