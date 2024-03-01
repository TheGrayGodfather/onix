const { format } = require("date-fns")

const createTimeStamp = () => {
    return format(new Date(), "h:mm:ss aaa")
}

module.exports ={createTimeStamp}