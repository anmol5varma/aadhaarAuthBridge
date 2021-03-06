const Server = require('../../server');
const Models = require('../../models');

describe('Testing the hapi server for GET request', () => {
  beforeEach((done) => {
    Models.user.bulkCreate([{
      aadhaar_id: '123412345678',
      name: 'Abhishek varma',
      dob: '02-09-1989',
      gender: 'Male',
      contact: '8976576500',
      co: 'S/O Varma ji',
      house: '120/210',
      street: 'Lajpat Nagar',
      landmark: '',
      lc: 'locality',
      subdist: 'Kanpur nagar',
      dist: 'Kanpur',
      state: 'Uttar Pradesh',
      pc: '208005',
      po: '208005',
      createdAt: new Date(),
      updatedAt: new Date(),
    }]).then(() => {
      done();
    }).catch((err) => {
      console.log(err.message);
    });
  });

  afterEach((done) => {
    Models.user.destroy({
      where: { aadhaar_id: '123412341234' },
      truncate: true,
    }).then(() => {
      done();
    }).catch();
  });

  test('Valid status code for the api', (done) => {
    const options = {
      method: 'POST',
      url: '/user',
      payload: {
        aadhaarNo: '123412341234',
        name: 'Anmol varma',
        dob: '26-10-1996',
        gender: 'Male',
        contact: '8098469331',
        co: 'S/O Varma ji',
        house: '120/210',
        street: 'Lajpat Nagar',
        landmark: 'abcd',
        locality: 'locality',
        subDistrict: 'Kanpur nagar',
        district: 'Kanpur',
        state: 'Uttar Pradesh',
        pincode: '208005',
      },
    };
    Server.inject(options, (response) => {
      console.log(response.result);
      expect(response.result.statusCode).toBe(200);
      done();
    });
  });
  test('Trying to make multiple entries with same aadhaar number', (done) => {
    const options = {
      method: 'POST',
      url: '/user',
      payload: {
        aadhaarNo: '123412345678',
        name: 'Abhishek varma',
        dob: '02-09-1989',
        gender: 'Male',
        contact: '8976576500',
        co: 'S/O Varma ji',
        house: '120/210',
        street: 'Lajpat Nagar',
        landmark: 'efgh',
        locality: 'locality',
        subDistrict: 'Kanpur nagar',
        district: 'Kanpur',
        state: 'Uttar Pradesh',
        pincode: '208005',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(500);
      done();
    });
  });
  test('Invalid status code for wrong aadhaar number', (done) => {
    const options = {
      method: 'POST',
      url: '/user',
      payload: {
        aadhaarNo: '3412341235',
        name: 'Anmol varma',
        dob: '02-09-1989',
        gender: 'Male',
        contact: '8976576500',
        co: 'S/O Varma ji',
        house: '120/210',
        street: 'Lajpat Nagar',
        landmark: 'efgh',
        locality: 'locality',
        subDistrict: 'Kanpur nagar',
        district: 'Kanpur',
        state: 'Uttar Pradesh',
        pincode: '208005',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.validation.keys[0]).toBe('aadhaarNo');
      done();
    });
  });
  test('Invalid status code for wrong aadhaar number', (done) => {
    const options = {
      method: 'POST',
      url: '/user',
      payload: {
        aadhaarNo: '3412341235',
        name: 'Anmol varma',
        dob: '02-09-1989',
        gender: 'Male',
        contact: '8976576500',
        co: 'S/O Varma ji',
        house: '120/210',
        street: 'Lajpat Nagar',
        landmark: 'efgh',
        locality: 'locality',
        subDistrict: 'Kanpur nagar',
        district: 'Kanpur',
        state: 'Uttar Pradesh',
        pincode: '208005',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(400);
      done();
    });
  });
  test('Invalid status code for wrong pincode', (done) => {
    const options = {
      method: 'POST',
      url: '/user',
      payload: {
        aadhaarNo: '123412341235',
        name: 'Anmol varma',
        dob: '02-09-1989',
        gender: 'Male',
        contact: '8976576500',
        co: 'S/O Varma ji',
        house: '120/210',
        street: 'Lajpat Nagar',
        landmark: 'efgh',
        locality: 'locality',
        subDistrict: 'Kanpur nagar',
        district: 'Kanpur',
        state: 'Uttar Pradesh',
        pincode: '20805',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.validation.keys[0]).toBe('pincode');
      done();
    });
  });
  test('Invalid status code for wrong pincode', (done) => {
    const options = {
      method: 'POST',
      url: '/user',
      payload: {
        aadhaarNo: '123412341235',
        name: 'Anmol varma',
        dob: '02-09-1989',
        gender: 'Male',
        contact: '8976576500',
        co: 'S/O Varma ji',
        house: '120/210',
        street: 'Lajpat Nagar',
        landmark: 'efgh',
        locality: 'locality',
        subDistrict: 'Kanpur nagar',
        district: 'Kanpur',
        state: 'Uttar Pradesh',
        pincode: '20805',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(400);
      done();
    });
  });
  test('Invalid status code for wrong contact number', (done) => {
    const options = {
      method: 'POST',
      url: '/user',
      payload: {
        aadhaarNo: '3412341235',
        name: 'Anmol varma',
        dob: '02-09-1989',
        gender: 'Male',
        contact: '8976asd576500',
        co: 'S/O Varma ji',
        house: '120/210',
        street: 'Lajpat Nagar',
        landmark: 'efgh',
        locality: 'locality',
        subDistrict: 'Kanpur nagar',
        district: 'Kanpur',
        state: 'Uttar Pradesh',
        pincode: '208005',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.validation.keys[0]).toBe('aadhaarNo');
      done();
    });
  });
  test('Invalid status code for wrong contact number', (done) => {
    const options = {
      method: 'POST',
      url: '/user',
      payload: {
        aadhaarNo: '3412341235',
        name: 'Anmol varma',
        dob: '02-09-1989',
        gender: 'Male',
        contact: '897sad6576500',
        co: 'S/O Varma ji',
        house: '120/210',
        street: 'Lajpat Nagar',
        landmark: 'efgh',
        locality: 'locality',
        subDistrict: 'Kanpur nagar',
        district: 'Kanpur',
        state: 'Uttar Pradesh',
        pincode: '208005',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(400);
      done();
    });
  });
  test('Invalid status code for invalid request', (done) => {
    const options = {
      method: 'POST',
      url: '/userss',
      payload: {
        aadhaarNo: '3412341235',
        name: 'Anmol varma',
        dob: '02-09-1989',
        gender: 'Male',
        contact: '8976576500',
        co: 'S/O Varma ji',
        house: '120/210',
        street: 'Lajpat Nagar',
        landmark: 'efgh',
        locality: 'locality',
        subDistrict: 'Kanpur nagar',
        district: 'Kanpur',
        state: 'Uttar Pradesh',
        pincode: '208005',
      },
    };
    Server.inject(options, (response) => {
      expect(response.result.statusCode).toBe(404);
      done();
    });
  });
});
