const errorMessage = {
    userNotFound: {message: "user not found", statusCode: 404},
    payloadMissing: {message: "payload is missing in generation of token", statusCode: 400},
    invalidEmailPassword: {message: "invalid email or password", statusCode: 401},
    unauthorize: {message: "unauthorized user", statusCode: 401},
    forbidden: {message: "access forbidden", statusCode: 403}
}

module.exports = {errorMessage}