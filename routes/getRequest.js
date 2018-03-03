module.exports = [
  {
    method: 'POST',
    path: '/user',
    handler: (request, response) => {
      const userObject = {};
      userObject.aadhaar_id = response.payload.aadhaarNo;
      userObject.name = response.payload.name;
      userObject.dob = response.payload.dob;
      userObject.gender = response.payload.gender;
      userObject.contact = response.payload.contact;
      userObject.co = response.payload.co;
      userObject.house = response.payload.house;
      userObject.street = response.payload.street;
      userObject.landmark = response.payload.landmark;
      userObject.lc = response.payload.locality;
      userObject.subdist = response.payload.subDistrict;
      userObject.dist = response.payload.district;
      userObject.state = response.payload.state;
      userObject.pc = response.payload.pincode;
      userObject.po = response.payload.postalcode;
      // Models.users.create();
    },
  }];
