const express = require("express")
const { userController } = require("../controllers/user.controller.js")
const { checkSchema } = require("express-validator")
const { loginValidationSchema, signupValidationSchema } = require("../validations/auth.validation.js")
const { authenticateUser } = require("../middlewares/auth.middleware.js")

const route = express.Router()

route.route("/signup").post(checkSchema(signupValidationSchema), userController.signup)
route.route("/login").post(checkSchema(loginValidationSchema), userController.login)
route.route("/logout").post(authenticateUser, userController.logout)

module.exports = route