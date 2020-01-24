'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      first:{
        type: Sequelize.STRING,
        allowNull: false,

      },
      last:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      participation:{
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    
    });
  
  },

  down: (queryInterface, Sequelize) => {
  
    return queryInterface.dropTable('users');
    
  }
};
