const { format } = require("date-fns")

const createTimeStamp = (dateTime) => {
    if(dateTime) {
        return format(new Date(dateTime), "h:mm:ss aaa dd-MMM-yyyy")
    } else {
        return format(new Date(), "h:mm:ss aaa")
    }
}

const createTimeStampForEmail = (dateTime) => {
  return format(new Date(dateTime), "h:mm:ss aaa do MMMM yyyy");
};


module.exports ={createTimeStamp, createTimeStampForEmail}