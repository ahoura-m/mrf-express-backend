const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController.js")


// App Routers
router.get("/cpt-list", mainController.getCPTList)
router.get("/hospital-list", mainController.getHospitalList)
router.put("/get-cpt-prices/:id", mainController.getCPTPrices)

module.exports = router