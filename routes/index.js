const addUser = require('./addUserToAadhaarDB');
const sendOtp = require('./sendOtpToUser');
const verifyOtp = require('./verifyOtp');
// require all the request files and export them in an array
module.exports = [].concat(addUser, sendOtp, verifyOtp);
