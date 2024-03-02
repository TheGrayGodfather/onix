const OTPValidationSchema = {
    OTP: {
        escape: true,
        trim: true,
        isLength: {
            options: {
                min: 6,
                max: 6
            },
            errorMessage: "OTP is invalid"
        },
        isNumeric: {
            options: {
                no_symbols: true,
            },
            errorMessage: "OTP is invalid"
        }
    }
}

module.exports = {OTPValidationSchema}