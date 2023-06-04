const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const adminData = require("./routes/adminroutes")
const shopRoutes = require("./routes/shoproutes")
const rootDir = require("./utils/path")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use("/admin", adminData.routes)
app.use(shopRoutes)
app.use(express.static(path.join(rootDir, "public")))

app.use("/", (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "notfound.html"))
})
app.listen(3001)