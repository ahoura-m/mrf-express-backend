const express = require("express")
const app = express()
const mainRoutes = require("./routes/mainRoutes")
const cors = require("cors")

//setup cors
app.use(cors())

//Use .env file in config folder
require("dotenv").config()

const port = process.env.PORT || 3000

//Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes)

//Server Running
app.listen(port, () => {
    console.log(`Server is runnin on port ${port}`)
})
