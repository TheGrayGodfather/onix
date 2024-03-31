const { default: mongoose } = require("mongoose");

const notificationSchema = new mongoose.Schema({
    soursId: mongoose.Schema.Types.ObjectId,
    notificationMessage: String
}, {timestamps: true})

const Notification = mongoose.model("Notification", notificationSchema)

module.exports = {Notification}