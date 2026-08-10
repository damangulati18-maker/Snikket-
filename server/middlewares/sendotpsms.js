const twilio = require("twilio");

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

const sendOtp = async (mobile, otp) => {
    await client.messages.create({
        body: `Your Snikket OTP is ${otp}`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: `+91${mobile}`
    });
};

module.exports = sendOtp;