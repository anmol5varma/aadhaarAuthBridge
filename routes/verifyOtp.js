const Models = require('../models');

module.exports = [
  {
    method: 'POST',
    path: '/details',
    handler: (request, reply) => {
      Models.otp_verify.findOne({
        where: {
          token: request.payload.token,
          aadhaar_id: request.payload.aadhaarNo,
        },
      }).then((response) => {
        if (response === null) {
          return reply({ statusCode: 400, message: 'Invalid token' });
        } else if (response.otp.toString() === request.payload.otp) {
          return Models.user.findOne({
            where: { aadhaar_id: request.payload.aadhaarNo },
          }).then((responseForAadhaarNumber) => {
            const responseObjectWithKYC = {
              user_id: '',
              aadhaar_id: '',
              e_Kyc: {
                Poi: {},
                Poa: {},
              },
              time: '',
              ver: '',
            };
            responseObjectWithKYC.user_id = responseForAadhaarNumber.id;
            responseObjectWithKYC.aadhaar_id = responseForAadhaarNumber.aadhaar_id;
            responseObjectWithKYC.e_Kyc.status = 'y';
            responseObjectWithKYC.e_Kyc.Description = 'Authenticated Successfully';
            responseObjectWithKYC.e_Kyc.Poi.Name = responseForAadhaarNumber.name;
            responseObjectWithKYC.e_Kyc.Poi.Dob = responseForAadhaarNumber.dob;
            responseObjectWithKYC.e_Kyc.Poi.Gender = responseForAadhaarNumber.gender;
            responseObjectWithKYC.e_Kyc.Poa.co = responseForAadhaarNumber.co;
            responseObjectWithKYC.e_Kyc.Poa.house = responseForAadhaarNumber.house;
            responseObjectWithKYC.e_Kyc.Poa.street = responseForAadhaarNumber.street;
            responseObjectWithKYC.e_Kyc.Poa.landmark = responseForAadhaarNumber.landmark;
            responseObjectWithKYC.e_Kyc.Poa.lc = responseForAadhaarNumber.lc;
            responseObjectWithKYC.e_Kyc.Poa.subdist = responseForAadhaarNumber.subdist;
            responseObjectWithKYC.e_Kyc.Poa.dist = responseForAadhaarNumber.dist;
            responseObjectWithKYC.e_Kyc.Poa.state = responseForAadhaarNumber.state;
            responseObjectWithKYC.e_Kyc.Poa.pc = responseForAadhaarNumber.pc;
            responseObjectWithKYC.e_Kyc.Poa.po = responseForAadhaarNumber.po;
            responseObjectWithKYC.e_Kyc.Poa.uidtag = 'AAPKA AADHAAR';
            responseObjectWithKYC.time = new Date();
            responseObjectWithKYC.ver = 2.1;
            Models.otp_verify.destroy({
              where: {
                id: responseForAadhaarNumber.id,
              },
              truncate: true,
            });
            return reply(responseObjectWithKYC);
          });
        }
        const responseObjectWithoutKYC = {
          user_id: '',
          aadhaar_id: '',
          e_Kyc: {
            Poi: {},
            Poa: {},
          },
          time: '',
          ver: '',
        };
        responseObjectWithoutKYC.user_id = null;
        responseObjectWithoutKYC.aadhaar_id = request.payload.aadhaarNo;
        responseObjectWithoutKYC.e_Kyc.status = 'n';
        responseObjectWithoutKYC.e_Kyc.Description = 'Authentication failed';
        responseObjectWithoutKYC.e_Kyc.Poi.Name = null;
        responseObjectWithoutKYC.e_Kyc.Poi.Dob = null;
        responseObjectWithoutKYC.e_Kyc.Poi.Gender = null;
        responseObjectWithoutKYC.e_Kyc.Poa.co = null;
        responseObjectWithoutKYC.e_Kyc.Poa.house = null;
        responseObjectWithoutKYC.e_Kyc.Poa.street = null;
        responseObjectWithoutKYC.e_Kyc.Poa.landmark = null;
        responseObjectWithoutKYC.e_Kyc.Poa.lc = null;
        responseObjectWithoutKYC.e_Kyc.Poa.subdist = null;
        responseObjectWithoutKYC.e_Kyc.Poa.dist = null;
        responseObjectWithoutKYC.e_Kyc.Poa.state = null;
        responseObjectWithoutKYC.e_Kyc.Poa.pc = null;
        responseObjectWithoutKYC.e_Kyc.Poa.po = null;
        responseObjectWithoutKYC.e_Kyc.Poa.uidtag = null;
        responseObjectWithoutKYC.time = new Date();
        responseObjectWithoutKYC.ver = 2.1;
        return reply(responseObjectWithoutKYC);
      }).catch(err => reply({ statusCode: 500, message: 'Server error', error: err.message }));
    },
  }];
