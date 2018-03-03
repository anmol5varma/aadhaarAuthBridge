const Models = require('../models');
const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');

const Joi = BaseJoi.extend(Extension);

module.exports = [
  {
    method: 'POST',
    path: '/user',
    config: {
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
      validate: {
        payload: Joi.object({
          aadhaarNo: Joi.string().regex(/^[1-9]{1}[0-9]{11}$/).required(),
          name: Joi.string().regex(/^[a-zA-Z][a-zA-Z ]*$/).required(),
          dob: Joi.date().format('DD-MM-YYYY').required(),
          gender: Joi.string().regex(/^(male|female|others)$/i).required(),
          contact: Joi.string().min(10).regex(/^[1-9]{1}[0-9]{9}$/).required(),
          co: Joi.string().regex(/^[a-zA-Z][a-zA-Z /]*$/).required(),
          house: Joi.string().regex(/^[0-9a-zA-Z][0-9a-zA-Z -/]*$/).required(),
          street: Joi.string().regex(/^[0-9a-zA-Z][0-9a-zA-Z -/]*$/).required(),
          landmark: Joi.string().regex(/^[a-zA-Z -._/#]*$/),
          locality: Joi.string().regex(/^[a-zA-Z][a-zA-Z ]*$/).required(),
          subDistrict: Joi.string().regex(/^[a-zA-Z][a-zA-Z ]*$/).required(),
          district: Joi.string().regex(/^[a-zA-Z][a-zA-Z ]*$/).required(),
          state: Joi.string().regex(/^[a-zA-Z][a-zA-Z ]*$/).required(),
          pincode: Joi.string().regex(/^[1-9]{1}[0-9]{5}$/).required(),
        }),
      },
    },
  }];
