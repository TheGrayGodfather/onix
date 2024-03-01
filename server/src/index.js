require("dotenv").config()
const express = require("express")
const cors = require("cors")
const { connectDBSync } = require("../config/db.js")
const { createTimeStamp } = require("./utils/time.util.js")
const { CustomError } = require("./utils/error.util.js")
const globalErrorHandler = require("./middlewares/global.error.middleware.js")

const app = express()
const PORT = process.env.PORT || 3031

app.use(express.json())
app.use(cors())

app.use("/api/auth", require("./routes/auth.route.js"))

// path not found
app.all("*", (req, res, next) => {
    next(new CustomError(`invalid route ${req.url}`, 404))
})

app.use(globalErrorHandler)

app.listen(PORT, () => {
    connectDBSync()
    console.log(`${createTimeStamp()} [server] running at ${PORT}`);
})