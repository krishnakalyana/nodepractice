const express = require("express")
const bodyParser = require("body-parser")

const adminRoutes = require("./routes/adminroutes")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(adminRoutes)

app.use("/", (req, res, next) => {
    res.send("Hello World")
})
app.listen(3001)