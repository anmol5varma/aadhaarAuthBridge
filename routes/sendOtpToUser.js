const uuidv1 = require('uuid/v1');
const msg91 = require('msg91')('199605AlBxU1LOFG5a90f82e', 'PgBank', '4');
const Models = require('../models');

const generateOTP = () => {
  const otp = Math.floor(1000 + (Math.random() * 9000));
  return otp;
};

module.exports = [
  {
    method: 'POST',
    path: '/otp',
    handler: (request, reply) => Models.user
      .findOne({ where: { aadhaar_id: request.payload.aadhaarNo } }).then((response) => {
        if (response === null) {
          return reply({ statusCode: 204, message: 'Invalid aadhaar number.' });
        }
        const userToken = uuidv1();
        const otp = generateOTP();
        const mobileNo = response.contact;
        return Models.otp_verify.findOrCreate({
          where: { aadhaar_id: response.aadhaar_id }, defaults: { otp, token: userToken },
        })
          // .spread((queryResult) => {
          //   if (queryResult === null) {
          //     return reply({
          //       statusCode: 500,
          //       verificationToken: null, message: 'Error with messaging service',
          //     });
          //   }
          //   return reply({
          //     statusCode: 200, verificationToken: queryResult.token, message: 'OTP sent to user',
          //   });
          // });
          .spread(queryResult => msg91.send(mobileNo, `Your otp is ${queryResult.otp} for verification.`, (err) => {
            if (err) {
              return reply({
                statusCode: 500, verificationToken: null, message: 'Error with messaging service',
              });
            }
            return reply({
              statusCode: 200, verificationToken: queryResult.token, message: 'OTP sent to user',
            });
          }));
      }).catch(err => reply({ statusCode: 500, message: 'Server error', error: err.message })),
  }];
