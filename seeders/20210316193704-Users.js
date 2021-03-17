'use strict';
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      fullName: 'Super Admin',
      email: 'superadmin@gmail.com',
      password: bcrypt.hashSync('superadmin@123', salt),
      phoneNumber: '',
      userStatus: true,
      resetPasswordToken: '',
      resetPasswordExpire: '',
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullName: 'Admin',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('admin@123', salt),
      phoneNumber: '',
      userStatus: true,
      resetPasswordToken: '',
      resetPasswordExpire: '',
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullName: 'User',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('user@123', salt),
      phoneNumber: '',
      userStatus: true,
      resetPasswordToken: '',
      resetPasswordExpire: '',
      roleId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Users', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
