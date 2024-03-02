const OTPEMailView = (OTP, timeStamp) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Email Verification</title>
    </head>
    <body
      style="
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f8f8f8;
        text-align: center;
        margin: 0;
        padding: 20px;
      "
    >
      <div
        style="
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 30px;
          max-width: 400px;
          margin: 0 auto;
        "
      >
        <img src="https://res.cloudinary.com/ddrtcxjhm/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1709367947/8_1_qusxiu.jpg?_s=public-apps" />

        <h1 style="color: #333; margin-bottom: 20px;">Email Verification</h1>
  
        <div
          style="
            background-color: #f0f0f0;
            border-radius: 8px;
            padding: 20px;
            margin-top: 20px;
          "
        >
          <p style="font-size: 24px; color: #333; margin: 0">
            Your One-Time Password
            <strong style="color: red">${OTP}</strong>
          </p>
  
          <p style="color: #777; margin-top: 15px">
            Expires at: <br/>
            <strong>${timeStamp}</strong>
          </p>
        </div>
  
        <p style="color: #888; margin-top: 20px">Thank you for choosing Onix!</p>
      </div>
    </body>
  </html>
  `;
};

module.exports = { OTPEMailView };
