const express = require("express")
const { otpController } = require("../controllers/otp.controller.js")
const { authenticateUser } = require("../middlewares/auth.middleware.js")
const { checkSchema } = require("express-validator")
const { OTPValidationSchema } = require("../validations/miscellaneous.validation.js")

const route = express.Router()

route.use(authenticateUser)
route.route("/send").post(otpController.sendOTP)
route.route("/verify").post(checkSchema(OTPValidationSchema), otpController.verifyOTP)

module.exports = route