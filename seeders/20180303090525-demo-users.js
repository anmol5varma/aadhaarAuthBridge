module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('users', [{
      aadhaar_id: '123412341234',
      name: 'Anmol varma',
      dob: new Date(1996, 9, 26),
      gender: 'male',
      contact: '8098469331',
      co: 'S/O L. N. Varma',
      house: '120/210',
      street: 'Lajpat nagar',
      landmark: '',
      lc: 'Lajpat nagar',
      subdist: 'Kanpur nagar',
      dist: 'Kanpur',
      state: 'Uttar pradesh',
      pc: '208005',
      po: '208005',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      aadhaar_id: '567856785678',
      name: 'Yash jindal',
      dob: new Date(1996, 3, 2),
      gender: 'female',
      contact: '9626563322',
      co: 'S/O Jindal industires',
      house: '30/1',
      street: '6th street',
      landmark: 'Kat homes',
      lc: 'Mahadevpura',
      subdist: 'Bengalure',
      dist: 'Bengalure',
      state: 'Karnatak',
      pc: '560048',
      po: '560048',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {}), /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


  down: (queryInterface) => {
    queryInterface.bulkDelete('users', [{
      aadhaar_id: '123412341234',
    }]);
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
