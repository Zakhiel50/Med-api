const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Praticien = sequelize.define('Praticien', {
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
        }
    }, {
      tableName: 'Praticiens',
      updatedAt: false
    })
    Praticien.associate = (models) => {
      Praticien.hasMany(models.Facture, { foreignKey: 'praticienId', as: 'factures' });
      Praticien.hasMany(models.RendezVous, { foreignKey: 'praticienId', as: 'rdvs' });

  };
    return Praticien
}