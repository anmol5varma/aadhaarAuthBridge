const Models = require('../models');

module.exports = [
  {
    method: 'POST',
    path: '/user',
    handler: (request, reply) => {
      const userObject = {};
      userObject.aadhaar_id = request.payload.aadhaarNo;
      userObject.name = request.payload.name;
      userObject.dob = request.payload.dob;
      userObject.gender = request.payload.gender;
      userObject.contact = request.payload.contact;
      userObject.co = request.payload.co;
      userObject.house = request.payload.house;
      userObject.street = request.payload.street;
      userObject.landmark = request.payload.landmark;
      userObject.lc = request.payload.locality;
      userObject.subdist = request.payload.subDistrict;
      userObject.dist = request.payload.district;
      userObject.state = request.payload.state;
      userObject.pc = request.payload.pincode;
      userObject.po = request.payload.pincode;
      return Models.user.create(userObject).then(() => reply({ statusCode: 200, message: 'Person added' }))
        .catch(err => reply({ statusCode: 500, message: 'Database error', error: err.message }));
    },
  }];
