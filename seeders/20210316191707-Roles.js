'use strict';

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
    await queryInterface.bulkInsert('Roles', [{
      roleName: 'Super Admin',
      roleDescription: 'This is super admin role',
      roleStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      roleName: 'Admin',
      roleDescription: 'This is admin role',
      roleStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      roleName: 'User',
      roleDescription: 'This is user role',
      roleStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
