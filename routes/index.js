const addUser = require('./addUserToAadhaarDB');
const sendOtp = require('./sendOtpToUser');

// require all the request files and export them in an array
module.exports = [].concat(addUser, sendOtp);
