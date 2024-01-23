const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routers/userRoute")
const blogRouter = require("./routers/blogRouter")

mongoose.connect("mongodb://localhost:27017/blog")
    .then(() => console.log("connected to db"))
    .catch((error) => console.log(error))

const app = express()

app.get("/", (req, res) => res.send("Hello world!"))
app.use(express.urlencoded({ extended: false }))
app.use("/users", userRouter)
app.use("/blogs", blogRouter)

app.listen(8080, () => console.log("server is open"))
