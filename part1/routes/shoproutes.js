const express = require("express")
const path = require("path")

const rootDir = require("../utils/path")
const adminData = require("./adminroutes")

const router = express.Router()

router.get('/', (req, res) => {
    console.log("shop", adminData.products);
    res.sendFile(path.join(rootDir, "views", "shop.html"))
})
module.exports = router