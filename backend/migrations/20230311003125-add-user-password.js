'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.addColumn('users', 'password_digest', {
    type: Sequelize.DataTypes.STRING
   })
  },

  down: async (queryInterface, Sequelize) => {
    return quertInterface.removeColumn('users', 'password_digest')
  }
};
