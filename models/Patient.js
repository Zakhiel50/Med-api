const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        adress: {
          type: DataTypes.STRING,
          allowNull: false
        },
        age: {
          type: DataTypes.STRING,
          allowNull: false
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false
        },
    }, {
      tableName: 'Patients'
    })
    Patient.associate = (models) => {
      Patient.hasMany(models.Facture, { foreignKey: 'patientId', as: 'factures' });
      Patient.hasMany(models.RendezVous, { foreignKey: 'patientId', as: 'rdvs' });
  };
    return Patient
}