'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Factures', 'praticienId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Praticiens',
        key: 'id',
      },
      onDelete: 'CASCADE'
    });

    await queryInterface.addColumn('Factures', 'patientId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Patients',
        key: 'id',
      },
      onDelete: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Factures', 'praticienId');
    await queryInterface.removeColumn('Factures', 'patientId');
  }
};

