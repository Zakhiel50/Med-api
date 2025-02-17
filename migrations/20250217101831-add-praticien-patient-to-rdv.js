'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('RendezVous', 'praticienId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Praticiens',
        key: 'id',
      },
      onDelete: 'CASCADE'
    });

    await queryInterface.addColumn('RendezVous', 'patientId', {
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
    await queryInterface.removeColumn('RendezVous', 'praticienId');
    await queryInterface.removeColumn('RendezVous', 'patientId');
  }
};
